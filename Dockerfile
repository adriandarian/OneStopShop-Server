FROM node:12.19.0-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

EXPOSE 4000

CMD [ "yarn", "start" ]