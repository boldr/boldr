![boldr](docs/boldr-logo.png) Boldr
====
[![CircleCI](https://circleci.com/gh/boldr/boldrCMS.svg?style=svg)](https://circleci.com/gh/boldr/boldrCMS)   [![David-DM](https://david-dm.org/boldr/boldrCMS.svg)](https://github.com/boldr/boldrCMS)  
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

> Your dreams are bold. Your thoughts are bold. So why shouldn't your CMS be a little, **Boldr**?


Table of Contents
-----------------

  * [Boldr](#boldr)
    * [Stack](#stack)
    * [Overview](#overview)
  * [Getting Started](#getting-started)
    * [Environment Variables](#environment-variables)
  * [Usage](#usage)
    * [Development](#development)
    * [Production](#production)
  * [Contributing](#contributing)
  * [Documentation](#documentation)
  * [Demo](#demo)
  * [Changelog](#changelog)

Boldr
=====
**The API and CMS are now located in different repositories under the [Boldr organization](https://github.com/boldr).**

Boldr aims to provide a CMS to use as a base for your next web project. Built on cutting edge web technologies, along with a few time tested favorites, we believe Boldr could become something special. The world doesn't need another never-to-be finished CMS project, nor does it need the "next WordPress". Boldr tries to be none of that.  

Stack
-------------
* Node 6  
* Express  
* React  
* Postgres 9.5  
* Redis  
* Docker  

Overview
-----------

If you have been following the development of Boldr, things look differently than they did before 0.4.0. That's to be expected. Hopefully the architectural changes simplify the process in the long run.  

Boldr is broken up into two different modules, BoldrAPI and BoldrCMS.

The API lives at [Boldr/boldrAPI](https://github.com/boldr/boldrAPI). and the CMS at [Boldr/boldrCMS](https://github.com/boldr/boldrCMS). They both are required to run Boldr. BoldrAPI is responsible for everything on the backend, **except** rendering. BoldrCMS is primarily all frontend components, other than an Express server used for rendering.

#### Why the separation?
As Boldr becomes a more mature project, it is important to me to have a set of standards in place now rather than later on down the road. Logically it makes sense for the API and CMS to exist as two different entities, that rely on one another. This makes development, testing, and scaling better for everyone in the long run.


#### Containerizing all the things
Boldr is developed with running inside of multiple Docker containers in mind. During development it's recommended to run both the database and redis server containers from the `docker-compose.yml` file. The Makefile is setup to build a container for the cms module and a container for the api module as part of the build-to-deploy process.

Docker documentation is (will be) located [here](docs/docker/main.md), `docs/docker/main.md`.


Getting Started
======
At the moment, Boldr is in active development and not quite ready for use. However, to download it, and run it for development follow these directions.

```bash
$ git clone git@github.com:strues/boldr.git
```

After the repository is cloned, simply enter the directory and run make install. For whatever reason, if the Makefile fails, you'll need to go into the `api` and `cms` directories and `npm install`.  

Environment Variables
-----------------
Below are the **important environment variables** for the CMS. In addition there are the API url and proxy url to configure, they are located in `src/core/config.js`

```
SERVER_PORT
CLIENT_DEVSERVER_PORT
DISABLE_SSR
SERVER_BUNDLE_OUTPUT_PATH
CLIENT_BUNDLE_OUTPUT_PATH
CLIENT_BUNDLE_ASSETS_FILENAME
CLIENT_BUNDLE_HTTP_PATH
CLIENT_BUNDLE_CACHE_MAXAGE
```

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
Looking for an open source project to contribute to? I could use a hand developing Boldr. All types of contributions are welcome here. Take a look at some of the [current issues](https://github.com/boldr/boldrCMS/issues) and see if you find something you'd like to help out with. Feel free to submit pull requests to the develop branch.

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
- **Docker:** [docs/docker/main.md](docs/docker/main.md)
- **Structure:** [docs/structure.md](docs/structure.md)

Demo
=============

View a **very early** demo at https://staging.boldr.io   

> Email - admin@boldr.io  
Password - password


Change Log
=================
[View Here](Changelog.md)  

#### Lastest Version
##### 0.4.0
> 8/11/2016  

I've been going on and on about 0.4.0 coming soon, or in a few days. I couldnt bring myself to rush and push out something that is half-assed. I'm pleased to say that, 0.4 is quite an improvement over the previous releases.  
