FROM strues/node:6.7
ENV HOME=/home/boldr
RUN adduser -h /home/boldr -D boldr

COPY package.json $HOME/api/
RUN chown -R boldr:boldr $HOME/*

USER boldr
COPY compiled/ _migrations _seeds /home/boldr/api
WORKDIR /home/boldr/api
RUN npm install --production
EXPOSE 2121/tcp
CMD ["npm", "run" "start"]

# If you have native dependencies, you'll need extra tools
# RUN apk add --no-cache make gcc g++ python
