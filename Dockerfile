FROM mhart/alpine-node:6.6
RUN adduser -h /home/boldr -D boldr
ENV HOME=/home/boldr

COPY package.json static $HOME/app/
RUN chown -R boldr:boldr $HOME/*

USER boldr
WORKDIR $HOME/app
RUN npm install --production
EXPOSE 3000/tcp
CMD ["node", "run.js"]

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python
