FROM mhart/alpine-node:6.3

RUN mkdir -p /home/boldr-cms
WORKDIR /home/boldr-cms
COPY boldr-cms /home/boldr-cms

RUN apk add --no-cache \
  make gcc g++ python \
  && npm install

EXPOSE 3000

CMD npm run start:prod
