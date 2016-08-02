![boldr](docs/boldr-logo.png) Boldr
====
[![CircleCI](https://circleci.com/gh/strues/boldr.svg?style=svg)](https://circleci.com/gh/strues/boldr) [![Gitter](https://badges.gitter.im/strues/boldr.svg)](https://gitter.im/strues/boldr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) 

> Your dreams are bold. Your thoughts are bold. So why shouldn't your CMS be a little, **Boldr**?


Boldr aims to provide a CMS to use as a base for your next web project. Built on cutting edge web technologies, along with a few time tested favorites, we believe Boldr could become something special. The world doesn't need another never-to-be finished CMS project, nor does it need the "next WordPress". Boldr tries to be none of that.  

View a **very early** demo at https://staging.boldr.io   

> Email - admin@boldr.io  
Password - password

____

### Tech Stack

* Node 6  
* Express  
* React  
* Postgres 9.5  
* Redis  
* Docker  


If you have been following the development of Boldr, things look differently than they did before 0.4.0. That's to be expected. Hopefully the architectural changes simplify the process in the long run.  

Boldr is broken up into two different modules, BoldrAPI and BoldrCMS.

The API lives in `./api` and the CMS in `./cms`. They both are required to run Boldr. BoldrAPI is responsible for everything on the backend, **except** rendering. BoldrCMS is primarily all frontend components, other than an Express server used for rendering.

### Why the separation?
As Boldr becomes a more mature project, it is important to me to have a set of standards in place now rather than later on down the road. Logically it makes sense for the API and CMS to exist as two different entities, that rely on one another. This makes development, testing, and scaling better for everyone in the long run.


### Containerizing all the things
Boldr is developed with running inside of multiple Docker containers in mind. During development it's recommended to run both the database and redis server containers from the `docker-compose.yml` file. The Makefile is setup to build a container for the cms module and a container for the api module as part of the build-to-deploy process.

Docker documentation is (will be) located [here](docs/docker/main.md), `docs/docker/main.md`.


## Getting Started
At the moment, Boldr is in active development and not quite ready for use. However, to download it, and run it for development follow these directions.

```bash
$ git clone git@github.com:strues/boldr.git
```

After the repository is cloned, simply enter the directory and run make install. For whatever reason, if the Makefile fails, you'll need to go into the `api` and `cms` directories and `npm install`.  

### Environment Vars

Below are the four **most important environment variables** outside of database configurations that you need to worry about.

```javascript
"SSR_PORT": 9221,
"SITE_URL": "http://localhost:9221",
"API_BASE": "/api/v1",
"TARGET_URL": "http://localhost:9121"
  ```
At the moment, these variables are vital to configuration for Boldr. You may set them in a `.env` file, or define them in the package.json.

- **SSR_PORT**: The port the Express server responsible for server-side rendering listens on.
- **SITE_URL**: The main address Boldr is running on.  

  > *Example*  
  Development: http://localhost:9221  
  Staging https://staging.boldr.io  
  Production http://www.yourawesomesite.com

- **API_BASE**: Important so that you may choose to run Boldr's API from a different subdomain or version.  

  > *Example*  
  If I am serving the api from https://api.boldr.io, the API_BASE would be **/v1** otherwise the API would only respond to calls made to https://api.boldr.io/api/v1  

- **TARGET_URL**: Target url refers to the location of the API. It's used for proxying requests from the SSR / CMS server to the api server.  
> *Example*  
Production: https://api.boldr.io  
Development: http://localhost:9121  

### Connections
- The API runs on **localhost:9121**.
- **During development** Webpack Isomorphic Tools runs on localhost:8888 and serves from memory.
- The CMS server (SSR) runs on **localhost:9221**.
- Webpack Middleware (HMR) runs on **localhost:3001**.

#### Database

Make sure you have a database and user already created before trying to run Boldr.  The script `bin/createDB.sh` will create a new user, set a password, and grant the correct permissions for you. All that is required is to `chmod +x bin/createDB.sh` followed by `bash bin/createDB.sh DBNAME USERNAME PASSWORD`

Configuration of the database can be modified by environment variables, editing `api/src/core/config/boldr.js` or `api/src/core/config/<ENVIRONMENT>.json`. Boldr uses dotenv and Convict for managing configs.

From the root dir `make migrate` will run migrations on the database. Or else you can run `npm run migrate` from the api directory. The first time Boldr runs, it will automatically create an admin user with the email address of admin@boldr.io and password as the password.


#### Development
**Start the API** -- Open a terminal window and go to the api directory run `npm run dev`  
**Start the CMS** -- In another terminal window, go to the cms dir and run `npm run dev`  

After Boldr has started visit [http://localhost:9221](http://localhost:9221). You'll want to login using these credentials:  
> Email - admin@boldr.io  
Password - password

After logging in, visit the Dashboard and click on **Settings**. You will be redirected to the setup screen where you can input values about your website.  


#### Production
> No way. Not yet. However if you feel like building the application as if it were production execute the following

```bash
$ make build
```

## Contribute
Looking for an open source project to contribute to? We could use a hand developing Boldr.

## Documentation
- **API Documentation:** [docs/api](docs/api)  
- **Docker:** [docs/docker/main.md](docs/docker/main.md)
- **Structure:** [docs/structure.md](docs/structure.md)


#### Change Log
[View Here](Changelog.md)  
##### 0.3.8
> 7/25/2016

- **DX** Webpack 2 and all its glorious code splitting is set up.
- **DX** Code is organized in a way that is much more logical and should be easier for everyone to find things.
- **Bug Fix**  Article bodies implement the correct read only editor, providing rich blocks of styled content.
- **Breaking** Social login and verification emails have been temporarily removed from the active features. The code is   still there, but at this time there are bigger things for me to worry about.

