/* eslint-disable */
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTableIfNotExists('media', function(table) {
      table.increments('id');
      table.string('filename').unique().notNullable();
      table.string('file_type');
      table.string('s3url');
      table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('setting', function(table) {
      table.increments('id');
      table.string('site_name');
      table.string('site_url');
      table.string('site_logo');
      table.string('site_favicon');
      table.string('site_slogan');
      table.string('site_description');
      table.string('google_analytics');
      table.boolean('allow_registration').default(true);
      table.json('configuration');
    }),
    knex.schema.createTableIfNotExists('navigation', function(table) {
      table.increments('id');
      table.string('name');
      table.boolean('primary').default(false);
      table.boolean('restricted').default(false);
      table.string('location');
      table.json('items');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    //fk tables
    knex.schema.dropTableIfExists('media'),
    knex.schema.dropTableIfExists('setting'),
    knex.schema.dropTableIfExists('navigation')
  ]);
};
