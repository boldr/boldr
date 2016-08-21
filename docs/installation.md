Installation
==========

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
  - Change the configuration file location in `src/boldr-api/core/config/index.js` you can adjust environment specifics in the corresponding json files in the **env** folder.
7. 
  - For production: `npm run build:api` and then `npm run start:api` to run it.
  - For development: `npm run dev` or to only run the api instead of the CMS / SSR webpack `npm run dev:api`
