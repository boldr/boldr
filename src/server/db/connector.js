import knexLib from 'knex';
import KnexOrm from 'knex-orm';
import bookshelf from 'bookshelf';
import config, { paths } from '../../../config';
import Debug from 'debug';

export const Database = new KnexOrm(
  knexLib({
    client: 'pg',
    debug: true,
    charset: 'utf8',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }
  })
);

// export const connection = knexLib({
//   client: 'pg',
//   debug: true,
//   charset: 'utf8',
//   connection: {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
//   }
// });

// const Bookshelf = bookshelf(connection);
// Bookshelf.plugin('registry');

// const database = () => {
//   if (config.dbType === 'postgres') {
//     return Bookshelf;
//   }
  /*
  else {
    // Connect with MongoDB and setup schemas
  }
  */

//   return null;
// };

// const User = () => require('./models/user');
// const Post = () => require('./models/post');
// const Tag = () => require('./models/tag');

// export {
//   connection,
//   Bookshelf,
//   database,
//   User,
//   Post,
//   Tag
// };
