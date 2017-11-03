FROM node:boron as base

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json

RUN npm install

COPY .babelrc \
     .eslintrc.yml \
     webpack.config.babel.js \
     public/index.html \
     entrypoint.sh \
     ./


ENV PATH=./node_modules/.bin:$PATH \
    PORT=9001 \
    NODE_ENV=development \
    RUNTIME_ENV=dev

EXPOSE 9001

RUN eslint . && \
    babel src -d dist

CMD ["webpack-dev-server"]
ENTRYPOINT ["./entrypoint.sh"]

FROM base as prod
