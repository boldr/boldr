/* eslint-disable */
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('activity', function(table) {
      table.uuid('id').primary();
      table.uuid('user_id').references('id').inTable('user').onDelete('cascade').onUpdate('cascade');
      table.string('action').notNullable();
      table.uuid('entry_id').notNullable();
      table.string('entry_table').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('post_media', function(table) {
      table.uuid('post_id').notNullable().references('id').inTable('post');
      table.uuid('media_id').notNullable().references('id').inTable('media');
      table.primary(['post_id', 'media_id']);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    //fk tables
    knex.schema.dropTableIfExists('activity'),
    knex.schema.dropTableIfExists('post_media')
  ]);
};
