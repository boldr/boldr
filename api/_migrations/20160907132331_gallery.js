/* eslint-disable */
exports.up = function(knex, Promise) {

  return Promise.all([

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
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    //fk tables
    knex.schema.dropTableIfExists('gallery'),
    knex.schema.dropTableIfExists('content_type'),
    knex.schema.dropTableIfExists('collection'),
    knex.schema.dropTableIfExists('page'),
    knex.schema.dropTableIfExists('page_helper'),
  ]);
};
