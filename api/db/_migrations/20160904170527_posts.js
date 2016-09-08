exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTableIfNotExists('post', function(table) {
      table.increments('id').primary();
      table.string('title').unique().notNullable();
      table.string('slug').unique().notNullable();
      table.string('feature_image');
      table.text('content');
      table.text('excerpt');
      table.enu('status', ['published', 'draft', 'archived']).defaultTo('draft');
      table.integer('user_id').notNullable().references('id').inTable('user');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTableIfNotExists('post_tag', function(table) {
      table.integer('post_id').notNullable().references('id').inTable('post');
      table.integer('tag_id').notNullable().references('id').inTable('tag');
      table.primary(['post_id', 'tag_id']);
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
