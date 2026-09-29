#!/bin/sh
set -eu

if [ -n "${BACKEND_URL:-}" ]; then
  printf 'window.BACKEND_URL = "%s";\n' "$BACKEND_URL" > /usr/share/nginx/html/config.js
  cat > /etc/nginx/conf.d/default.conf <<EOF
server {
    listen 80;
    server_name localhost;

    location / {
        root /usr/share/nginx/html;
        index linktree.html;
        try_files \$uri \$uri/ /linktree.html;
    }

    location /getMyInfo {
        proxy_pass ${BACKEND_URL}/getMyInfo;
        proxy_http_version 1.1;
        proxy_ssl_server_name on;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
else
  printf 'window.BACKEND_URL = "";\n' > /usr/share/nginx/html/config.js
fi

exec nginx -g 'daemon off;'
