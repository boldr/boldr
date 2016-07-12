![boldr](static/favicon-96x96.png) Boldr
====

[![Join the chat at https://gitter.im/strues/boldr](https://badges.gitter.im/strues/boldr.svg)](https://gitter.im/strues/boldr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Your dreams are bold. Your thoughts are bold. So why shouldn't your CMS be a little, **Boldr**?


Boldr aims to provide a CMS to use as a base for your next web project. Built on cutting edge web technologies, along with a few time tested favorites, we believe Boldr could become something special. Of course the world doesn't need another never finished CMS project, nor does it need the "next WordPress". Boldr tries to be none of that.
____
### Tech Stack

* Node 6
* Express
* React
* Postgres 9.5  


### 0.1.0-alpha.3
7/11/2016  

[-] **Setup and Settings**  Added a setup within the dashboard for settings and site customization. This is the first step in the process of loading / preloading various customizations before sending them down to the browser. At the moment the setup *wizard* contains the basic info like Website name, URL, etc...

[-] **We're using Express**

[-] **Redis** Redis is used for sessions as well as caching *caching is in the early stages*.
    - This will be perhaps an opt in / out deal. Using PG as the fallback

[-] **Article Editor** Is now pretty damn broken. Nearly has the issue resolved. However, tags are now storing as unique.

[-] **Media Manager** Connecting to AWS S3. Uploading functionality as well as file management is coming along.
____

## Getting Started
At the moment, Boldr is in active development and not quite ready for use. However, to download it, and run it for development follow these directions.

```bash
$ git clone git@github.com:strues/boldr.git
$ npm install
```

Rename `example.env` to `.env`  and modify the values to match your environment. The values set in this file are loaded upon launch by the configuration file located in `src/server/config/boldr.js`. Click [here to view](https://github.com/strues/boldr/blob/master/src/server/config/boldr.js). You may also define the values in the respective environment.json file within the configuration directory. Take note that the .env file **overrides** all other configuration settings.

A Docker-Compose file along with a Postgres Dockerfile are included in the repository for you to use if you'd like.

Create the database for Boldr to use, and put it in the .env file where you see
`DB_NAME=`

```bash
$ npm run migrate
```
The above command will create the table structure for your database. You will need to create the database beforehand or you will
run into errors.

#### Development

```bash
$ npm run start:dev
```

The start:dev command launches the server, tells Webpack to compile the source code, and watch for changes.


#### Production
> No way. Not yet. However if you feel like building the application as if it were production execute the following

```bash
$ npm run compile
```

## Contribute
Looking for an open source project to contribute to? We could use a hand developing Boldr.

## Documentation
#### API Documentation
[View Here](docs/api/apidocs.md)  

#### Change Log
[View Here](docs/CHANGELOG.md)

#### Webpack configuration
[View Here](docs/webpack.md)

[logo]: https://boldr.io/favicon-96x96.png "Boldr"
