FROM mhart/alpine-node:6.8
ENV HOME=/home/boldr
RUN adduser -h /home/boldr -D boldr \
  && apk add --no-cache make gcc g++ python

COPY package.json /home/boldr
RUN chown -R boldr:boldr $HOME/*

USER boldr
COPY boldr-api /home/boldr
WORKDIR /home/boldr
RUN npm install --production
EXPOSE 2121/tcp
CMD ["npm", "run" "start"]

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python
