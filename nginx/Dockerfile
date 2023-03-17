FROM nginx:alpine

RUN rm -f /etc/nginx/conf.d/default.conf

COPY nginx.conf ssl.conf proxy_headers.conf /etc/nginx/
COPY server.conf gzip.conf /etc/nginx/conf.d/
COPY xkTNFOfRRA_3vTLUP4qFJVxX3G5L9gq5744hX17qg84 /var/www/html/.well-known/acme-challenge/

COPY /start-nginx.sh /start-nginx.sh

RUN chmod +x /start-nginx.sh

EXPOSE 80
EXPOSE 443
CMD [ "/start-nginx.sh" ]
