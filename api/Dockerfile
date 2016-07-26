FROM mhart/alpine-node:6.3

RUN mkdir -p /home/boldr-api
WORKDIR /home/boldr-api
COPY boldr-api /home/boldr-api

RUN apk add --no-cache postgresql-dev \
  build-base make gcc g++ python \
  && npm install

EXPOSE 3000

CMD npm run start:prod
