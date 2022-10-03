FROM nginx:latest

COPY ./dist/ /usr/share/nginx/html
COPY ./src/nginx /etc/nginx


