![boldr](static/favicon-96x96.png) Boldr
====
[![CircleCI](https://circleci.com/gh/strues/boldr.svg?style=svg)](https://circleci.com/gh/strues/boldr)[![Gitter](https://badges.gitter.im/strues/boldr.svg)](https://gitter.im/strues/boldr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Your dreams are bold. Your thoughts are bold. So why shouldn't your CMS be a little, **Boldr**?


Boldr aims to provide a CMS to use as a base for your next web project. Built on cutting edge web technologies, along with a few time tested favorites, we believe Boldr could become something special. Of course the world doesn't need another never finished CMS project, nor does it need the "next WordPress". Boldr tries to be none of that.
____
### Tech Stack

* Node 6
* Express
* React
* Postgres 9.5  


## Getting Started
At the moment, Boldr is in active development and not quite ready for use. However, to download it, and run it for development follow these directions.

```bash
$ git clone git@github.com:strues/boldr.git
$ npm install
```

Rename `example.env` to `.env`  and modify the values to match your environment. The values set in this file are loaded upon launch by the configuration file located in `server/config/boldr.js`. Click [here to view](https://github.com/strues/boldr/blob/master/src/server/config/boldr.js). You may also define the values in the respective environment.json file within the configuration directory. Take note that the .env file **overrides** all other configuration settings.

A Docker-Compose file along with a Postgres Dockerfile are included in the repository for you to use if you'd like.

Create the database for Boldr to use, and put it in the .env file where you see
`DB_NAME=`

```bash
$ npm run migrate
```
The above command will create the table structure for your database. You will need to create the database beforehand or you can run `npm run db:init` to create it for you. The first time Boldr runs, it will automatically create an admin user with the email address of admin@boldr.io and password as the password.

#### Development

```bash
$ npm run dev
```


#### Production
> No way. Not yet. However if you feel like building the application as if it were production execute the following

```bash
$ npm run build
```

## Contribute
Looking for an open source project to contribute to? We could use a hand developing Boldr.

## Documentation
#### API Documentation
[View Here](docs/api/apidocs.md)  

#### Change Log
[View Here](Changelog.md)


[logo]: https://boldr.io/favicon-96x96.png "Boldr"
