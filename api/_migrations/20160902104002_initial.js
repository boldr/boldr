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
    }),
    knex.schema.createTableIfNotExists('post', function(table) {
      table.uuid('id').primary();
      table.string('title', 140).unique().notNullable();
      table.string('slug').unique().notNullable();
      table.string('feature_image');
      table.text('content').notNullable();
      table.text('excerpt');
      table.enu('status', ['published', 'draft', 'archived']).defaultTo('draft');
      table.uuid('user_id').references('id').inTable('user').onDelete('restrict').onUpdate('cascade');
      table.json('meta');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.index('slug');
      table.index('status');
      table.index('created_at');
    }),
    knex.schema.createTableIfNotExists('post_tag', function(table) {
      table.increments('id').primary();
      table.uuid('post_id').unsigned().notNullable();
      table.integer('tag_id').unsigned().notNullable();
      table.unique(['post_id', 'tag_id']);
      table.foreign('post_id').references('id').inTable('post').onDelete('restrict').onUpdate('cascade');
      table.foreign('tag_id').references('id').inTable('tag').onDelete('restrict').onUpdate('cascade');
    }),
    knex.schema.createTableIfNotExists('media', function(table) {
      table.uuid('id').primary();
      table.string('filename').unique().notNullable();
      table.string('file_type');
      table.string('s3url');
      table.uuid('user_id').unsigned().notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.foreign('user_id').references('id').inTable('user').onDelete('restrict').onUpdate('cascade');
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
      table.string('name', 50).notNullable();
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
    }),
    knex.schema.createTableIfNotExists('gallery', function(table) {
      table.uuid('id').primary();
      table.string('name').unique().notNullable();
      table.string('slug');
      table.string('description');
      table.boolean('restricted').default(false);
      table.enu('status', ['published', 'draft', 'archived']).defaultTo('draft');
      table.json('entities');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('content_type', function(table) {
      table.increments('id');
      table.uuid('uuid');
      table.string('name');
      table.string('description');
      table.boolean('restricted').default(false);
      table.string('slug');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('collection', function(table) {
      table.increments('id');
      table.uuid('uuid');
      table.string('name');
      table.string('description');
      table.enu('status', ['published', 'draft', 'archived']).defaultTo('draft');
      table.string('location');
      table.text('content');
      table.integer('type_id').notNullable().references('id').inTable('content_type');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('page', function(table) {
      table.uuid('id').primary();
      table.string('name');
      table.string('url');
      table.json('layout');
      table.text('markup');
      table.enu('status', ['published', 'draft', 'archived']).defaultTo('draft');
      table.boolean('restricted').default(false);
      table.json('seo');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('page_helper', function(table) {
      table.increments('id');
      table.uuid('uuid');
      table.uuid('page_id').notNullable().references('id').inTable('page');
      table.string('name');
      table.string('scope');
      table.enu('type', ['string', 'int', 'boolean', 'array']);
      table.text('value');
    }),
    knex.schema.createTableIfNotExists('activity', function(table) {
      table.uuid('id').primary();
      table.string('name', 100);
      table.uuid('user_id').references('id').inTable('user').onDelete('restrict').onUpdate('cascade');
      table.string('action').notNullable();
      table.integer('type').notNullable();
      table.json('data').notNullable();
      table.uuid('entry_id').notNullable();
      table.string('entry_table').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('post_media', function(table) {
      table.uuid('post_id').notNullable().references('id').inTable('post').onDelete('restrict').onUpdate('cascade');
      table.uuid('media_id').notNullable().references('id').inTable('media').onDelete('restrict').onUpdate('cascade');
      table.primary(['post_id', 'media_id']);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    //fk tables
    knex.schema.dropTableIfExists('user'),
    knex.schema.dropTableIfExists('role'),
    knex.schema.dropTableIfExists('tag'),
    knex.schema.dropTableIfExists('user_role'),
    knex.schema.dropTableIfExists('post'),
    knex.schema.dropTableIfExists('post_tag'),
    knex.schema.dropTableIfExists('media'),
    knex.schema.dropTableIfExists('setting'),
    knex.schema.dropTableIfExists('navigation'),
    knex.schema.dropTableIfExists('links'),
    knex.schema.dropTableIfExists('navigation_link'),
    knex.schema.dropTableIfExists('gallery'),
    knex.schema.dropTableIfExists('content_type'),
    knex.schema.dropTableIfExists('collection'),
    knex.schema.dropTableIfExists('page'),
    knex.schema.dropTableIfExists('page_helper'),
    knex.schema.dropTableIfExists('activity'),
    knex.schema.dropTableIfExists('post_media')
  ]);
};
