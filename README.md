![boldr](docs/boldr-logo.png) Boldr
====
[![CircleCI](https://circleci.com/gh/strues/boldr.svg?style=svg)](https://circleci.com/gh/strues/boldr) [![Gitter](https://badges.gitter.im/strues/boldr.svg)](https://gitter.im/strues/boldr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Your dreams are bold. Your thoughts are bold. So why shouldn't your CMS be a little, **Boldr**?


Boldr aims to provide a CMS to use as a base for your next web project. Built on cutting edge web technologies, along with a few time tested favorites, we believe Boldr could become something special. Of course the world doesn't need another never finished CMS project, nor does it need the "next WordPress". Boldr tries to be none of that.
____

### Tech Stack

* Node 6
* Express
* React
* Postgres 9.5  
* Redis
* Docker

Work in progress API documentation - [View Here](https://boldr.io/docs/api)  

## Getting Started
At the moment, Boldr is in active development and not quite ready for use. However, to download it, and run it for development follow these directions.

```bash
$ git clone git@github.com:strues/boldr.git
```

After the repository is cloned, a githook will execute. The hook runs the install for both the API and the CMS modules. If you have been following the development of Boldr, things might look a little differently than they did pre-0.4.0. That's to be expected. Hopefully the architectural changes simplify the process in the long run.  

Boldr is now broken up into two different "modules", boldr-api and boldr-cms. The API lives in `./api` and the CMS in `./cms`. They both play their respective roles and are required to run Boldr. The boldr-api module is responsible for everything on the backend and the boldr-cms handles the application as well as serving the rendered pages. The CMS runs a proxy to the api server.

### Why the separation?
As Boldr becomes a more mature project, it is important to me to have a set of standards in place now rather than later on down the road. Logically it makes sense for the API and CMS to exist as two different entities, that rely on one another. This makes development, testing, and scaling better for everyone in the long run.


### Containerizing all the things
Boldr is developed with running inside of multiple Docker containers in mind. During development it's recommended to run both the database and redis server containers from the `docker-compose.yml` file. The Makefile is setup to build a container for the cms module and a container for the api module as part of the build-to-deploy process.


### Connections
- The API runs on **localhost:9121**.
- **During development** Webpack Isomorphic Tools runs on localhost:8888 and serves from memory.
- The CMS server runs on **localhost:9221**.
- Webpack runs on **localhost:3001**.



Setup the database for the first time using the command below from the root directory.

```bash
$ make migrate
```

The above command will create the table structure for your database. You will need to create the database beforehand. The first time Boldr runs, it will automatically create an admin user with the email address of admin@boldr.io and password as the password.

#### Development
**Start the API** -- Open a terminal window and go to the api directory run `npm run dev`  
**Start the CMS** -- In another terminal window, go to the cms dir and run `npm run dev`  

#### Production
> No way. Not yet. However if you feel like building the application as if it were production execute the following

```bash
$ make build-api && make build-cms
```

## Contribute
Looking for an open source project to contribute to? We could use a hand developing Boldr.

## Documentation
#### API Documentation
[View Here](https://boldr.io/docs/api)  

#### Change Log
[View Here](Changelog.md)  
##### 0.3.8
> 7/25/2016

- **DX** Webpack 2 and all its glorious code splitting is set up.
- **DX** Code is organized in a way that is much more logical and should be easier for everyone to find things.
- **Bug Fix**  Article bodies implement the correct read only editor, providing rich blocks of styled content.
- **Breaking** Social login and verification emails have been temporarily removed from the active features. The code is   still there, but at this time there are bigger things for me to worry about.

[logo]: https://boldr.io/favicon-96x96.png "Boldr"
