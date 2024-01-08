FROM nginx:1.19

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

RUN mkdir /var/www/html -p && touch /var/www/html/index.js

