FROM strues/node:6.6
MAINTAINER Stevven Truesdell <steven@strues.io>

ENV HOME=/home/boldr \
    POSTGRES_CONN_URI=postgres://boldr:boldr@postgres:5432/boldr \
    REDIS_CONN_URI=redis://redis:6379/4

COPY package.json $HOME/app/
RUN build_pkgs="make gcc g++ python" \
  && adduser -h /home/boldr -D boldr \
  && chown -R boldr:boldr $HOME/* \
  && apk --update add ${build_pkgs}

USER boldr
WORKDIR /home/boldr/app
RUN npm install --production
COPY static .env $HOME/app/
USER root
RUN npm prune \
    && rm -rf /tmp/* \
    && apk del ${build_pkgs} \
    && rm -rf /var/cache/apk/*

EXPOSE 3000/tcp
CMD ["node", "run.js"]
