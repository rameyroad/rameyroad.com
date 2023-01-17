FROM nginx AS base

FROM node:16 AS build
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run-script build

FROM base AS final
WORKDIR /app
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
