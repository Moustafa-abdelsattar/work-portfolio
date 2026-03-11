#!/usr/bin/env bash
# ============================================================
# EC2 Bootstrap Script — Portfolio
# ============================================================
# Installs Docker + Docker Compose v2 + Git on a fresh EC2
# instance. Supports Amazon Linux 2023 and Ubuntu 22.04/24.04.
#
# Usage:
#   chmod +x deploy/setup-ec2.sh
#   sudo ./deploy/setup-ec2.sh
# ============================================================

set -euo pipefail

echo "==> Detecting OS..."

if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS_ID="$ID"
else
    echo "ERROR: Cannot detect OS. /etc/os-release not found."
    exit 1
fi

# ── Install Docker ─────────────────────────────

case "$OS_ID" in
    amzn)
        echo "==> Amazon Linux detected"
        dnf update -y
        dnf install -y docker git
        ;;
    ubuntu)
        echo "==> Ubuntu detected"
        apt-get update -y
        apt-get install -y ca-certificates curl gnupg
        install -m 0755 -d /etc/apt/keyrings
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
            | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
        chmod a+r /etc/apt/keyrings/docker.gpg
        echo \
            "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
            https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
            > /etc/apt/sources.list.d/docker.list
        apt-get update -y
        apt-get install -y docker-ce docker-ce-cli containerd.io \
            docker-buildx-plugin docker-compose-plugin git
        ;;
    *)
        echo "ERROR: Unsupported OS '$OS_ID'. Use Amazon Linux 2023 or Ubuntu."
        exit 1
        ;;
esac

# ── Start Docker ───────────────────────────────

systemctl enable docker
systemctl start docker

# ── Install Docker Compose v2 (Amazon Linux) ──

if [ "$OS_ID" = "amzn" ]; then
    COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest \
        | grep '"tag_name"' | cut -d'"' -f4)
    ARCH=$(uname -m)
    curl -fsSL "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-linux-${ARCH}" \
        -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    mkdir -p /usr/local/lib/docker/cli-plugins
    ln -sf /usr/local/bin/docker-compose /usr/local/lib/docker/cli-plugins/docker-compose
fi

# ── Add ec2-user / ubuntu to docker group ──────

if id "ec2-user" &>/dev/null; then
    usermod -aG docker ec2-user
    echo "==> Added ec2-user to docker group"
elif id "ubuntu" &>/dev/null; then
    usermod -aG docker ubuntu
    echo "==> Added ubuntu to docker group"
fi

# ── Verify ─────────────────────────────────────

echo ""
echo "==> Installation complete!"
docker --version
docker compose version
echo ""
echo "==> NEXT STEPS:"
echo "   1. Log out and back in (so docker group takes effect)"
echo "   2. Clone your repo:  git clone <your-repo-url>"
echo "   3. cd work_portofolio"
echo "   4. Build & launch:  docker compose up -d --build"
echo "   5. Visit:  http://<public-ip>"
