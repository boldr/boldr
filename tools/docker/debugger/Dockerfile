FROM node:6.2.2
MAINTAINER Steven Truesdell <steven@strues.io>
RUN set -ex \
    && mkdir /app/node-inspector \
    && cd /app/node-inspector \
    && npm install node-inspector@0.12.8

VOLUME /app/node-inspector
ENTRYPOINT ["/app/node-inspector/node_modules/.bin/node-inspector"]
