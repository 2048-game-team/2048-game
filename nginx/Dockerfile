FROM nginx:alpine

RUN rm -f /etc/nginx/conf.d/default.conf

COPY nginx.conf ssl.conf proxy_headers.conf /etc/nginx/
COPY server.conf gzip.conf /etc/nginx/conf.d/

COPY /start-nginx.sh /start-nginx.sh

RUN chmod +x /start-nginx.sh

EXPOSE 80
EXPOSE 443
CMD [ "/start-nginx.sh" ]
