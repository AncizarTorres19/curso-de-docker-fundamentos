FROM nginx:latest

COPY /sitio /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
COPY config.js /usr/share/nginx/html/config.js
COPY entrypoint.sh /entrypoint.sh
RUN sed -i 's/\r$//' /entrypoint.sh && chmod +x /entrypoint.sh

EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
