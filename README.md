![boldr](https://boldr.io/logo.png)
====
[![Build Status](https://travis-ci.org/boldr/boldr.svg?branch=master)](https://travis-ci.org/boldr/boldr)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) | [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Gitter](https://badges.gitter.im/boldr/Lobby.svg)](https://gitter.im/boldr/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![Code Climate](https://codeclimate.com/github/boldr/boldr/badges/gpa.svg)](https://codeclimate.com/github/boldr/boldr)

> Your dreams are bold. Your thoughts are bold. So why shouldn't your CMS be a little, **Boldr**?


Table of Contents
-----------------

  * [Boldr](#boldr)
    * [Stack](#stack)
  * [Getting Started](#getting-started--installation)
    * [Environment Variables](#environment-variables)
  * [Usage](#usage)
    * [Development](#development)
    * [Production](#production)
  * [Contributing](#contributing)
  * [Documentation](#documentation)
  * [Demo](#demo)
  * [Changelog](#changelog)
  * [NGINX Config](docs/nginx.md)
  * [Installation](docs/installation.md)

Boldr
=====

Boldr aims to provide a CMS foundation for you to use as a base in your next web project. Built on cutting edge web technologies, along with a few time tested favorites, we believe Boldr could become something special. It's no secret, the world doesn't need another *never-to-be finished* CMS project, nor does it need the "next WordPress". Boldr tries to be none of that.  

Stack
-------------
* Node 6  
* Express  
* React  
* Postgres 9.5  
* Redis  
* Docker  

Getting Started / Installation
======
**A word of caution:** At the moment, Boldr is in active development. Things may change, there will be bugs, and you should not use it in production quite yet. Im not.

1. `git clone https://github.com/boldr/boldr.git`
2. `cd boldr && npm install`
3. `touch .env` then open it up in your preferred editor.
4. Add the following:  
```
SESSION_KEY=secret
AWS_ACCESS_KEY_ID=secret
AWS_SECRET_ACCESS_KEY=secret
MG_API=key-secret
MG_DOMAIN=yourdomain.com
POSTGRES_CONN_URI=postgres://postgres:password@localhost:5432/boldr_development
```
5. `docker-compose up -d` unless you're running Postgres and Redis already.
6. `npm run migrate` followed by `npm run seed` this will create the database tables as well as seed some initial content.
  - To change the database configuration modify or remove the `POSTGRES_CONN_URI` from your .env
  - Alternatively, you may change the configuration file location in `src/boldr-api/core/config/index.js`.  
7.
  - For production: `npm run build` and then `npm run start:prod` to run it.
  - For development: `npm run dev`  

![Dashboard](https://boldr.io/editor.png)   

Usage
=========

Development
---------------
**Start the CMS** -- Run `npm run dev`  

After Boldr has started visit [http://localhost:3000](http://localhost:3000). You'll want to login using these credentials:  
> Email - admin@boldr.io  
Password - password

After logging in, visit the Dashboard and click on **Settings**. You will be redirected to the setup screen where you can input values about your website.  


Production
-----------
> No way. Not yet. However if you feel like building the application as if it were production execute the following

```bash
$ npm run build
```

Contributing
===============
Looking for an open source project to contribute to? I could use a hand developing Boldr. All types of contributions are welcome here. Take a look at some of the [current issues](https://github.com/boldr/boldr/issues) and see if you find something you'd like to help out with. Feel free to submit pull requests to the develop branch.

**Contribution Area Ideas**
- Documentation
- Designs
- React
- Node
- Build / Installation
- Play a major role in a community driven project, have some fun, and work on improving your skills.

Documentation
=================
- **API Documentation:** [docs/api](docs/api)  
- **Docker:** [docs/docker/main.md](docs/docker.md)
- **Nginx:** [docs/nginx.md](docs/nginx.md)
- **Roadmap:** [ROADMAP.md](ROADMAP.md)
- **Installation / Setup:** [docs/Installation.md](docs/Installation.md)
Demo
=============

View a **very early** demo at https://staging.boldr.io   

> Email - admin@boldr.io  
Password - password


![Blog](https://boldr.io/blog.png)  
