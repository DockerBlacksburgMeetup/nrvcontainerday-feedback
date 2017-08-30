FROM node:8.4-alpine AS build
WORKDIR /app
COPY package* ./
RUN npm install
COPY public /app/public
COPY src /app/src
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html