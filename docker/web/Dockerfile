FROM node:14.5.0-alpine3.10
WORKDIR /app
COPY ../../chatroom-web/package*.json ./
RUN npm install
COPY ../../chatroom-web/ .