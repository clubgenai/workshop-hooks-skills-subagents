/* ============================================================================
   Club GenAI — Hooks, Skills & Subagents
   Slide loader: fetches one HTML file per *partie* and injects them into the
   Reveal.js .slides container, then initialises Reveal with the exact config
   from the original design (1600x900 canvas, fade transitions, OS-aware tabs).

   Splitting the deck into one file per partie mirrors the generate-slides
   skill convention. Each file is a single outer <section> (a vertical group)
   wrapping the inner <section> slides of that part:
     → / ←  navigate between parties
     ↓ / ↑  navigate within a partie
   ============================================================================ */

const slides = [
  'slides/part0-ouverture.html',
  'slides/part1-introduction.html',
  'slides/part2-hooks.html',
  'slides/part3-skills.html',
  'slides/part4-subagents.html',
  'slides/part5-mcp-conclusion.html',
];

async function loadSlidesAndInit() {
  const container = document.querySelector('.slides');
  try {
    const parts = await Promise.all(
      slides.map(url => fetch(url).then(r => {
        if (!r.ok) throw new Error(`Failed to load ${url} (${r.status})`);
        return r.text();
      }))
    );
    container.innerHTML = parts.join('\n');

    Reveal.initialize({
      hash: true,
      transition: 'fade',
      transitionSpeed: 'fast',
      width: 1600,
      height: 900,
      margin: 0,
      minScale: 0.1,
      maxScale: 3,
      center: false,
      controls: true,
      controlsTutorial: false,
      progress: true,
      slideNumber: false,
      plugins: [RevealHighlight],
    });

    // OS-aware command tabs: select the visitor's OS, keep them clickable.
    initOSTabs();
    Reveal.on('slidechanged', () => setTimeout(initOSTabs, 150));
  } catch (err) {
    console.error('Error loading slides:', err);
    container.innerHTML = `<section><h2>Erreur de chargement</h2><p>${err.message}</p></section>`;
  }
}

function initOSTabs() {
  const ua = navigator.userAgent;
  let os = 'mac';
  if (ua.includes('Win')) os = 'win';
  else if (ua.includes('Linux') && !ua.includes('Mac')) os = 'linux';

  document.querySelectorAll('.os-wrap').forEach(wrap => {
    const tabs = wrap.querySelectorAll('.os-tab');
    const panes = wrap.querySelectorAll('.os-pane');
    const activate = (targetOs) => {
      const hasOs = [...tabs].some(t => t.dataset.os === targetOs);
      const activeOs = hasOs ? targetOs : (tabs[0] && tabs[0].dataset.os);
      tabs.forEach(t => t.classList.toggle('active', t.dataset.os === activeOs));
      panes.forEach(p => p.classList.toggle('active', p.dataset.os === activeOs));
    };
    activate(os);
    tabs.forEach(tab => {
      if (!tab.dataset.osInited) {
        tab.dataset.osInited = '1';
        tab.addEventListener('click', () => activate(tab.dataset.os));
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', loadSlidesAndInit);
