module.exports.up = async (db) => {
  await db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await db.raw('CREATE EXTENSION IF NOT EXISTS "hstore"');

  await db.schema.createTable('action_type', (table) => {
    table.increments('id').unsigned().primary();
    table.enu('type', ['create', 'update', 'delete', 'register']).notNullable();

    table.index('type');
  });
  await db.schema.createTable('role', (table) => {
    // pk
    table.increments('id').unsigned().primary();
    table.string('name', 64).notNullable().unique();
    table.string('image', 200).nullable();
    table.text('description').nullable();
    table.timestamp('created_at').notNullable().defaultTo(db.fn.now());
    table.timestamp('updated_at').nullable().defaultTo(null);
    // indexes
    table.index('name');
  });
  await db.schema.createTable('user', (table) => {
    // pk
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v1mc()')).primary();
    table.string('email', 100).unique().notNullable();
    table.string('password', 64).notNullable();
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('username', 115).unique().notNullable();
    table.string('avatar_url', 255).defaultTo('https://boldr.io/images/unknown-avatar.png');
    table.string('profile_image', 255).nullable();
    table.string('location', 100).nullable();
    table.text('bio').nullable();
    table.date('birthday', 8).nullable();
    table.string('website', 100).nullable();
    table.boolean('verified').defaultTo(false);

    table.timestamp('created_at').notNullable().defaultTo(db.fn.now());
    table.timestamp('updated_at').nullable().defaultTo(null);
    // fk

    // indexes
    table.index('username');
    table.index('verified');
    table.index('email');
  });
  await db.schema.createTable('verification_token', (table) => {
    // pk
    table.increments('id').unsigned().primary();
    table.string('ip', 32);
    table.string('token');
    table.boolean('used').defaultTo(false);
    table.uuid('user_id').unsigned();
    table.timestamp('created_at').defaultTo(db.fn.now());
    table.timestamp('updated_at').nullable().defaultTo(null);
    // fk
    table.foreign('user_id').references('id').inTable('user').onDelete('cascade').onUpdate('cascade');
    // indexes
    table.index('token');
  });
  await db.schema.createTable('reset_token', (table) => {
    // pk
    table.increments('id').unsigned().primary();
    table.string('ip', 32);
    table.string('token', 255).comment('hashed token');
    table.dateTime('expiration');
    table.boolean('used').defaultTo(false);

    table.uuid('user_id').unsigned();
    table.timestamp('created_at').defaultTo(db.fn.now());
    table.timestamp('updated_at').nullable().defaultTo(null);
    // fk
    table.foreign('user_id').references('id').inTable('user').onDelete('cascade').onUpdate('cascade');
    // indexes
    table.index('token');
  });
  await db.schema.createTable('tag', (table) => {
    table.increments('id').unsigned().primary();
    table.string('name').notNullable().unique();
    table.string('description').nullable();

    table.index('name');
  });
  await db.schema.createTable('post', (table) => {
    // pk | uuid
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v1mc()')).primary();
    table.string('title', 140).unique().notNullable();
    table.string('slug').unique().notNullable();
    table.string('feature_image', 255).nullable();
    table.string('background_image', 255).nullable();
    table.json('attachments').nullable();
    table.json('meta').nullable();
    table.boolean('featured').defaultTo(false);
    table.text('content').notNullable();
    table.text('excerpt').notNullable();
    table.uuid('user_id').unsigned().notNullable();
    table.boolean('published').defaultTo(true);
    table.timestamp('created_at').notNullable().defaultTo(db.fn.now());
    table.timestamp('updated_at').nullable().defaultTo(null);
    // fk | uuid
    table.foreign('user_id').references('id').inTable('user').onDelete('cascade').onUpdate('cascade');

    table.index('slug');
    table.index('published');
    table.index('created_at');
  });
  await db.schema.createTable('attachment', (table) => {
    // pk | uuid
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v1mc()')).primary();
    table.string('file_name');
    table.string('safe_name');
    table.string('original_name');
    table.string('file_description');
    table.string('file_type');
    table.uuid('user_id').unsigned().notNullable();
    table.string('url').notNullable();
    table.string('s3_key');
    table.timestamp('created_at').defaultTo(db.fn.now());
    table.timestamp('updated_at').defaultTo(db.fn.now());

    table.foreign('user_id').references('id').inTable('user').onDelete('cascade').onUpdate('cascade');
  });
  await db.schema.createTable('setting', (table) => {
    table.increments('id').unsigned().primary();
    table.string('key', 100).notNullable();
    table.string('label', 100).notNullable();
    table.string('value', 255).notNullable();
    table.string('description', 255).notNullable();

    table.index('key');
    table.index('value');
  });
  await db.schema.createTable('menu', (table) => {
    table.increments('id').unsigned().primary();
    table.string('name').notNullable();
    table.string('label').notNullable();
    table.json('attributes').nullable();
    table.boolean('restricted').default(false);
    table.integer('order').notNullable();

    table.index('label');
  });
  await db.schema.createTable('menu_detail', (table) => {
    table.increments('id').unsigned().primary();
    table.string('label', 50).notNullable();
    table.string('name', 50).notNullable();
    table.string('attribute', 255).nullable();
    table.integer('position');
    table.integer('parent_id').nullable();
    table.string('link').notNullable();
    table.string('icon').nullable();

    table.index('label');
    table.index('link');
  });
  await db.schema.createTable('gallery', (table) => {
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v1mc()')).primary();
    table.string('name').unique().notNullable();
    table.string('slug');
    table.string('description');
    table.boolean('restricted').default(false);
    table.enu('status', ['published', 'draft', 'archived']).defaultTo('draft');
    table.timestamp('created_at').notNullable().defaultTo(db.fn.now());
    table.timestamp('updated_at').nullable().defaultTo(null);
  });

  await db.schema.createTableIfNotExists('template', (table) => {
    table.increments('id').unsigned().primary();
    table.uuid('uuid');
    table.string('name', 100).unique().notNullable();
    table.string('slug', 110).notNullable();
    table.json('meta');
    table.json('content');
    table.timestamp('created_at').notNullable().defaultTo(db.fn.now());
    table.timestamp('updated_at').nullable().defaultTo(null);

    table.index('slug');
    table.index('uuid');
  });

  await db.schema.createTable('page', (table) => {
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v1mc()')).primary();
    table.string('name').unique().notNullable();
    table.string('slug').unique();
    table.string('url').unique().notNullable();
    table.json('layout');
    table.json('data');
    table.enu('status', ['published', 'draft', 'archived']).defaultTo('draft');
    table.boolean('restricted').default(false);
    table.json('meta');
    table.timestamp('created_at').notNullable().defaultTo(db.fn.now());
    table.timestamp('updated_at').nullable().defaultTo(null);

    table.index('name');
  });

  await db.schema.createTable('activity', (table) => {
    table.uuid('id').notNullable().defaultTo(db.raw('uuid_generate_v1mc()')).primary();
    table.uuid('user_id').unsigned().notNullable();
    table.integer('action_type_id').unsigned().notNullable();
    table.uuid('activity_post').unsigned();
    table.uuid('activity_user').unsigned();
    table.uuid('activity_attachment').unsigned();
    table.integer('activity_tag').unsigned();
    table.integer('activity_menu_detail').unsigned();
    table.integer('activity_template').unsigned();
    table.uuid('activity_page').unsigned();
    table.integer('activity_role').unsigned();
    table.timestamp('created_at').notNullable().defaultTo(db.fn.now());
    table.timestamp('updated_at').nullable().defaultTo(null);

    table.foreign('user_id').references('id').inTable('user').onDelete('cascade').onUpdate('cascade');
    table.foreign('action_type_id').references('id').inTable('action_type').onDelete('cascade').onUpdate('cascade');
    table.foreign('activity_post').references('id').inTable('post').onDelete('cascade').onUpdate('cascade');
    table.foreign('activity_user').references('id').inTable('user').onDelete('cascade').onUpdate('cascade');
    table.foreign('activity_attachment').references('id').inTable('attachment').onDelete('cascade').onUpdate('cascade');
    table.foreign('activity_tag').references('id').inTable('tag').onDelete('cascade').onUpdate('cascade');
    table.foreign('activity_menu_detail').references('id').inTable('menu_detail').onDelete('cascade').onUpdate('cascade');
    table.foreign('activity_template').references('id').inTable('template').onDelete('cascade').onUpdate('cascade');
    table.foreign('activity_page').references('id').inTable('page').onDelete('cascade').onUpdate('cascade');
    table.foreign('activity_role').references('id').inTable('role').onDelete('cascade').onUpdate('cascade');
  });
  await db.schema.createTable('post_attachment', (table) => {
    table.uuid('post_id').notNullable().references('id').inTable('post').onDelete('cascade').onUpdate('cascade');
    table.uuid('attachment_id').notNullable().references('id').inTable('attachment').onDelete('cascade').onUpdate('cascade');
    table.primary(['post_id', 'attachment_id']);
  });
  await db.schema.createTable('post_tag', (table) => {
    table.increments('id').primary();
    table.uuid('post_id').unsigned().notNullable();
    table.integer('tag_id').unsigned().notNullable();

    table.unique(['post_id', 'tag_id']);
    table.foreign('post_id').references('id').inTable('post').onDelete('cascade').onUpdate('cascade');
    table.foreign('tag_id').references('id').inTable('tag').onDelete('cascade').onUpdate('cascade');
  });
  await db.schema.createTable('user_role', (table) => {
    table.increments('id').primary();
    table.uuid('user_id').unsigned().notNullable();
    table.integer('role_id').unsigned().notNullable();

    table.unique(['user_id', 'role_id']);
    table.foreign('user_id').references('id').inTable('user').onDelete('cascade').onUpdate('cascade');
    table.foreign('role_id').references('id').inTable('role').onDelete('cascade').onUpdate('cascade');
  });
  await db.schema.createTable('template_page', (table) => {
    table.increments('id').primary();
    table.uuid('page_id').unsigned().notNullable();
    table.integer('template_id').unsigned().notNullable();

    table.unique(['page_id', 'template_id']);
    table.foreign('page_id').references('id').inTable('page').onDelete('cascade').onUpdate('cascade');
    table.foreign('template_id').references('id').inTable('template').onDelete('cascade').onUpdate('cascade');
  });
  await db.schema.createTable('menu_menu_detail', (table) => {
    table.integer('menu_id').notNullable().references('id').inTable('menu');
    table.integer('menu_detail_id').notNullable().references('id').inTable('menu_detail');
    table.primary(['menu_id', 'menu_detail_id']);
  });
};

module.exports.down = async (db) => {
  await db.schema.dropTableIfExists('action_type');
  await db.schema.dropTableIfExists('role');
  await db.schema.dropTableIfExists('user');
  await db.schema.dropTableIfExists('tag');
  await db.schema.dropTableIfExists('post');
  await db.schema.dropTableIfExists('attachment');
  await db.schema.dropTableIfExists('setting');
  await db.schema.dropTableIfExists('menu');
  await db.schema.dropTableIfExists('menu_detail');
  await db.schema.dropTableIfExists('gallery');
  await db.schema.dropTableIfExists('template');
  await db.schema.dropTableIfExists('page');
  await db.schema.dropTableIfExists('activity');
  await db.schema.dropTableIfExists('verification_token');
  await db.schema.dropTableIfExists('reset_token');
  await db.schema.dropTableIfExists('post_attachment');
  await db.schema.dropTableIfExists('post_tag');
  await db.schema.dropTableIfExists('user_role');
  await db.schema.dropTableIfExists('template_page');
  await db.schema.dropTableIfExists('menu_menu_detail');
};

module.exports.configuration = { transaction: true };
