FROM node:14.15.0-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install --force --quiet

RUN npm install nodemon -g --quiet

COPY . .

EXPOSE 3000

CMD nodemon -L --watch . bin/www.js
