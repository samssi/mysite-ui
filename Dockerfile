FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY react.conf /etc/nginx/conf.d/react.conf

RUN rm -f /etc/nginx/conf.d/default.conf

COPY /dist /var/www