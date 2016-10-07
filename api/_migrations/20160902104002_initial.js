/* eslint-disable */
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('user', function(table) {
      table.uuid('id').primary();
      table.string('first_name', 50).notNullable();
      table.string('last_name', 100);
      table.string('display_name', 50).notNullable();
      table.string('avatar_url');
      table.string('email', 100).unique().notNullable();
      table.string('password').notNullable();
      table.string('location', 100);
      table.string('bio');
      table.string('website', 100);
      table.string('account_token');
      table.string('reset_password_token');
      table.dateTime('reset_password_expiration');
      table.boolean('verified').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());

      table.index('email')
    }),

    knex.schema.createTableIfNotExists('role', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.index('name');
    }),

    knex.schema.createTableIfNotExists('user_role', function(table) {
      table.increments('id').primary();
      table.uuid('user_id').unsigned().notNullable();
      table.integer('role_id').unsigned().notNullable();
      table.unique(['user_id', 'role_id']);
      table.foreign('role_id').references('id').inTable('role').onDelete('restrict').onUpdate('cascade');
      table.foreign('user_id').references('id').inTable('user').onDelete('restrict').onUpdate('cascade');
    }),

    knex.schema.createTableIfNotExists('tag', function(table) {
      table.increments('id').primary();
      table.uuid('uuid');
      table.string('name').notNullable().unique();
      table.string('description');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.index('name');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    //fk tables
    knex.schema.dropTableIfExists('user'),
    knex.schema.dropTableIfExists('role'),
    knex.schema.dropTableIfExists('tag'),
    knex.schema.dropTableIfExists('user_role')
  ]);
};
