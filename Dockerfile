# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY . .
RUN npm ci 
# Build the app
RUN npm run build
# production environment
FROM nginx:latest 
COPY --from=build /app/build /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
COPY config/rensourcecert.crt /etc/nginx/certs/rensourcecert.crt
COPY config/rensourcecert.key /etc/nginx/certs/rensourcecert.key

EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]