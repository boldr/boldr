/* eslint-disable */
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('post', function(table) {
      table.uuid('id').primary();
      table.string('title').unique().notNullable();
      table.string('slug').unique().notNullable();
      table.string('feature_image');
      table.text('content').notNullable();
      table.text('excerpt');
      table.enu('status', ['published', 'draft', 'archived']).defaultTo('draft');
      table.uuid('user_id').references('id').inTable('user').onDelete('restrict').onUpdate('cascade');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('post_tag', function(table) {
      table.increments('id').primary();
      table.uuid('post_id').unsigned().notNullable();
      table.integer('tag_id').unsigned().notNullable();
      table.unique(['post_id', 'tag_id']);
      table.foreign('post_id').references('id').inTable('post').onDelete('restrict').onUpdate('cascade');
      table.foreign('tag_id').references('id').inTable('tag').onDelete('restrict').onUpdate('cascade');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    //fk tables
    knex.schema.dropTableIfExists('post'),
    knex.schema.dropTableIfExists('post_tag')
  ]);
};
