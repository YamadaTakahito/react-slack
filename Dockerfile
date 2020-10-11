FROM node:14.13.1

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install
