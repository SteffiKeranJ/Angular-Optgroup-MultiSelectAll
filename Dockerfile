FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/test /usr/share/nginx/html
