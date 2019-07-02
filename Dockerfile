FROM node:12.4-alpine AS build
WORKDIR /app
COPY ./ /app
ENV BE_URL=http://51.144.170.9:3000
RUN npm install \
    && npm run build

EXPOSE 3000

ENTRYPOINT npm run start