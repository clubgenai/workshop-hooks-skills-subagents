FROM debian:bookworm-slim

# Non-root user uid=1000
RUN useradd -m -u 1000 -s /bin/bash coder

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl wget git ca-certificates \
    python3 python3-pip python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Node.js 22 (requis par claude-code et code-server)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# code-server (VS Code in browser)
RUN curl -fsSL https://code-server.dev/install.sh | sh

# Claude Code CLI
RUN npm install -g @anthropic-ai/claude-code

# ─── Outils spécifiques au TP ─────────────────────────────────────────────────

# jq (parsing JSON dans les hooks shell)
RUN apt-get update && apt-get install -y --no-install-recommends jq \
    && rm -rf /var/lib/apt/lists/*

# prettier disponible via npx (pas d'install globale — npx prettier --write)
# bash est déjà disponible dans debian:bookworm-slim

# ──────────────────────────────────────────────────────────────────────────────

# Workspace dir
RUN mkdir -p /home/coder/workspace && chown -R coder:coder /home/coder

USER coder
WORKDIR /home/coder/workspace

ENV SHELL=/bin/bash
ENV HOME=/home/coder

# Coder agent is downloaded at runtime from CODER_AGENT_URL injected by Terraform
CMD ["sh", "-c", "curl -fsSL \"${CODER_AGENT_URL}/bin/coder-linux-amd64\" -o /tmp/coder-agent && chmod +x /tmp/coder-agent && exec /tmp/coder-agent agent"]
