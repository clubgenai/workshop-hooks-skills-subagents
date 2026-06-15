/* ═══════════════════════════════════════════════════
   OS-TABS — Détection d'OS + bascule d'onglet
   ═══════════════════════════════════════════════════

   Chargé une fois depuis index.html. Fonctionne sur les slides
   injectées en asynchrone (fetch) grâce à un MutationObserver et
   à la délégation d'évènements.

   Markup attendu :
   <div class="os-tabs" data-os-tabs>
     <div class="os-tabs__nav">
       <button class="os-tabs__tab" data-os="mac">macOS</button>
       <button class="os-tabs__tab" data-os="linux">Linux</button>
       <button class="os-tabs__tab" data-os="windows">Windows</button>
     </div>
     <div class="os-tabs__panel" data-os="mac">...</div>
     <div class="os-tabs__panel" data-os="linux">...</div>
     <div class="os-tabs__panel" data-os="windows">...</div>
   </div>
*/
(function () {
  'use strict';

  function detectOS() {
    var uad = navigator.userAgentData;
    var platform = (uad && uad.platform) ? uad.platform : (navigator.platform || '');
    var hay = (platform + ' ' + (navigator.userAgent || '')).toLowerCase();

    if (hay.indexOf('win') !== -1) return 'windows';
    if (hay.indexOf('mac') !== -1 || hay.indexOf('iphone') !== -1 || hay.indexOf('ipad') !== -1) return 'mac';
    if (hay.indexOf('linux') !== -1 || hay.indexOf('android') !== -1) return 'linux';
    return 'mac'; /* défaut raisonnable */
  }

  function activate(group, os) {
    var panels = group.querySelectorAll('.os-tabs__panel');
    var tabs   = group.querySelectorAll('.os-tabs__tab');

    /* Si l'OS demandé n'a pas de panneau, retomber sur le premier disponible */
    var has = false;
    panels.forEach(function (p) { if (p.getAttribute('data-os') === os) has = true; });
    if (!has && panels.length) os = panels[0].getAttribute('data-os');

    panels.forEach(function (p) {
      p.classList.toggle('is-active', p.getAttribute('data-os') === os);
    });
    tabs.forEach(function (t) {
      t.classList.toggle('is-active', t.getAttribute('data-os') === os);
    });
  }

  function initGroup(group) {
    if (group.dataset.osInit) return;
    group.dataset.osInit = '1';
    activate(group, detectOS());
  }

  function initAll(root) {
    (root || document).querySelectorAll('[data-os-tabs]').forEach(initGroup);
  }

  /* Bascule au clic — capture + stopPropagation pour ne pas déclencher
     la navigation Reveal.js */
  document.addEventListener('click', function (e) {
    var tab = e.target.closest && e.target.closest('.os-tabs__tab');
    if (!tab) return;
    e.stopPropagation();
    e.preventDefault();
    var group = tab.closest('[data-os-tabs]');
    if (group) activate(group, tab.getAttribute('data-os'));
  }, true);

  /* Les slides sont injectées après le chargement → observer le conteneur */
  function start() {
    initAll(document);
    var slides = document.querySelector('.slides');
    if (slides && window.MutationObserver) {
      new MutationObserver(function () { initAll(document); })
        .observe(slides, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
