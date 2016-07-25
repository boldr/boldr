FROM node:6.3

ENV POSTGRES_DB_URL=postgres://postgres:password@db:5432/boldr

RUN mkdir -p /usr/src/boldr
WORKDIR /usr/src/boldr

COPY package.json /usr/src/boldr
RUN apt-get install -y libpq-dev && npm install
COPY . /usr/src/boldr

ENV NODE_ENV production

EXPOSE 3000
CMD ["npm", "start"]
