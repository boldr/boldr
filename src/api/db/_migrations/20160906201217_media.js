/* eslint-disable */
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTableIfNotExists('media', function(table) {
      table.uuid('id').primary();
      table.string('filename').unique().notNullable();
      table.string('file_type');
      table.string('s3url');
      table.uuid('user_id').unsigned().notNullable().references('id').inTable('user');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('setting', function(table) {
      table.increments('id');
      table.string('site_name').notNullable();
      table.string('site_url').notNullable();
      table.string('site_logo');
      table.string('site_favicon');
      table.string('site_slogan');
      table.string('site_description');
      table.string('google_analytics');
      table.boolean('allow_registration').default(true);
      table.json('configuration');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('navigation', function(table) {
      table.increments('id');
      table.uuid('uuid');
      table.string('name').notNullable();
      table.boolean('primary').default(false);
      table.boolean('restricted').default(false);
      table.enu('location', ['header', 'sidebar', 'footer', 'admin']).defaultTo('header');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('link', function(table) {
      table.increments('id');
      table.uuid('uuid');
      table.string('name').notNullable();
      table.integer('position');
      table.string('href').notNullable();
      table.string('icon');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('navigation_link', function(table) {
      table.integer('navigation_id').notNullable().references('id').inTable('navigation');
      table.integer('link_id').notNullable().references('id').inTable('link');
      table.primary(['navigation_id', 'link_id']);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    //fk tables
    knex.schema.dropTableIfExists('media'),
    knex.schema.dropTableIfExists('setting'),
    knex.schema.dropTableIfExists('navigation'),
    knex.schema.dropTableIfExists('links'),
    knex.schema.dropTableIfExists('navigation_link')
  ]);
};
