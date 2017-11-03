FROM node:boron as base

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json

RUN npm install

COPY .babelrc \
     .eslintrc.yml \
     webpack.config.babel.js \
     public/index.html \
