![boldr logo](https://boldr.io/logo.png)

[![Build Status][circle-img]][circle-link] [![Code Climate][cc-img]][cc-link] [![Gitter][gitter-img]][gitter-link]

# Boldr

Boldr is an up and coming, modern CMS. It is built on **buzz words** along with React, Postgres, and Node. Boldr is a universal / isomorphic app, hence, built on buzz words.

_If you made it this far, I know what you're probably thinking..._ The world doesn't need another _never-to-be finished_ CMS project, nor does it need the "next WordPress". Boldr is none of that. Over the course of the past five or so months, my spare time has been invested into this passion project.

**Table of Contents**
- [Boldr](#boldr)

  - [Core Technologies](#core-technologies)

- [Getting Started / Installation](#getting-started-installation)

- [Editor](#editor)

- [Usage](#usage)

  - [Development](#development)
  - [Production](#production)

- [Contributing](#contributing)

- [Documentation](#documentation)

- [Demo](#demo)

<!-- /TOC -->

 > Your dreams are bold. Your thoughts are bold. So why shouldn't your CMS be a little, **Boldr**?

## Core Technologies

- [Node](https://github.com/nodejs/node)
- [Express](https://github.com/expressjs/express)
- [React](https://github.com/facebook/react)
- [Postgres](https://github.com/postgres/postgres) ([Knex](http://knexjs.org/) & [Objection](https://github.com/Vincit/objection.js/))
- [Redis](http://redis.io/)
- [Docker](https://github.com/docker/docker)
- [Webpack v2](https://github.com/webpack/webpack)

## Getting Started / Installation

**A word of caution:** At the moment, Boldr is in active development. Meaning there can and most likely will, be the occasional breaking changes, and architectural adjustments.

That being said, I'm fairly confident the majority of large breaking changes is behind us.

1. `git clone https://github.com/boldr/boldr.git`
2. `cd boldr && yarn install / npm install`
3. `cp env.example .env` and open it up in your preferred editor.
4. The .env file contains nearly every configuration option available for you. The actual configuration is located in `api/src/config/config`. I recommend using the `config.js` file and only using the .env for secrets because **.env overrides the default config values.**
5. `docker-compose up -d` unless you're running Postgres and Redis already.
6. `npm run migrate` followed by `npm run seed` in order to populate the database tables.

## Usage

Quick notes:

- Ports

  - **Frontend**: 3000
  - **Webpack**: 3001 - _dev only_
  - **Webpack-Isomorphic-Tools**: 8888 - _dev only_
  - **API**: 2121

- Hot reloading doesnt work everywhere due to async/dynamic routes.

### Development

**Starting it up** -- Run `npm run dev`

After Boldr has started visit <http://localhost:3000>. The admin account is already created and you may login using these credentials:

> Email - admin@boldr.io<br>
> Password - password

### Production

> I wouldnt recommend it. Not yet. However if you feel like building the application as if it were production execute the following.

```bash
$ npm run build
```

The build process outputs the frontend and server-side rendering app in `cms/dist`. It then runs the API code through babel and outputs to `api/boldr-api`.

You will need to place a copy of your .env file into the root of where BoldrAPI will be running.

## Contributing

Looking for an open source project to contribute to? All types of contributions are welcome here. In fact, I'd love some assistance. Take a look at some of the [current issues](https://github.com/boldr/boldr/issues) and see if you find something you'd like to help out with. Feel free to submit pull requests to the develop branch.

**Contribution Area Ideas**

- Documentation
- Designs
- React
- Node
- Build / Installation
- Play a major role in a community driven project, have some fun, and work on improving your skills.

## Documentation

- [`Roadmap`](ROADMAP.md)
- [`API`](https://docs.boldr.io)
- [`Docker`](docs/docker.md)
- [`Nginx`](docs/nginx.md)
- [`Troubleshooting`](docs/troubleshooting.md)

## Screenshots
| <a href="https://boldr.io/images/home.png"><img src="https://boldr.io/images/home.png" width="460"></a>| <a href="https://boldr.io/images/postlist.png"><img src="https://boldr.io/images/postlist.png" width="460"></a> |
|---|---|
|<a href="https://boldr.io/images/dashboard.png"><img src="https://boldr.io/images/dashboard.png" width="460"></a> | <a href="https://boldr.io/images/singlepost.png"><img src="https://boldr.io/images/singlepost.png" width="460"></a> |


  


## Demo

View a **very early** demo at <https://staging.boldr.io>

> Email - admin@boldr.io<br>
> Password - password


[cc-img]: https://codeclimate.com/github/boldr/boldr/badges/gpa.svg
[cc-link]: https://codeclimate.com/github/boldr/boldr
[circle-img]: https://circleci.com/gh/boldr/boldr.svg?style=svg
[circle-link]: https://circleci.com/gh/boldr/boldr
[gitter-img]: https://badges.gitter.im/Join%20Chat.svg
[gitter-link]: https://gitter.im/boldr/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
