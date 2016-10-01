function truncate(knex, Promise, tables) {
  return Promise.each(tables,
    (table) => knex.raw(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`));
}

const tables = [
  '"user"',
  'post',
  'role',
  'user_role',
  'tag',
  'post_tag',
  'media',
  'setting',
  'gallery',
  'collection',
  'navigation',
  'content_type',
  'page',
  'page_helper'
];

exports.seed = function(knex, Promise) {
  return truncate(knex, Promise, tables)
    .then(() => Promise.all([
      knex('role').insert({
        name: 'Pending',
        description: 'The role given to a user before validating their account.'
      }),
      knex('role').insert({
        name: 'Member',
        description: 'A verified user without special privileges'
      }),
      knex('role').insert({
        name: 'Staff',
        description: 'Allows access to the CMS dashboard.'
      }),
      knex('role').insert({
        name: 'Admin',
        description: 'Complete control over the CMS'
      })
    ]))
    .then(() => Promise.all([
      knex('user').insert({
        id: '1b062e26-df71-48ce-b363-4ae9b966e7a0',
        first_name: 'Joe',
        last_name: 'Gray',
        display_name: 'Joey',
        avatar_url: 'https://boldr.io/images/unknown-avatar.png',
        email: 'admin@boldr.io',
        password: '$2a$10$F3/Xx3hWEpTdaP4fE/dIhOb.FtxRiYMuc80nQFPkSrsBH4L6B5.Ka',
        location: 'Colorado',
        bio: 'I am me.',
        website: 'https://boldr.io',
        verified: true
      }),
      knex('user').insert({
        id: 'f4d869a6-1a75-469b-a9cc-965c552929e4',
        first_name: 'Sam',
        last_name: 'Hunt',
        display_name: 'Samus',
        avatar_url: 'https://boldr.io/images/unknown-avatar.png',
        email: 'user@boldr.io',
        password: '$2a$10$F3/Xx3hWEpTdaP4fE/dIhOb.FtxRiYMuc80nQFPkSrsBH4L6B5.Ka',
        location: 'California',
        bio: 'Someone doing things.',
        website: 'https://boldr.io',
        verified: true
      }),
      knex('user').insert({
        id: 'f11d3ebf-4ae6-4578-ba65-0c8f48b7f41f',
        first_name: 'Jessica',
        last_name: 'Smith',
        display_name: 'Jess',
        avatar_url: 'https://boldr.io/images/unknown-avatar.png',
        email: 'demo@boldr.io',
        password: '$2a$10$F3/Xx3hWEpTdaP4fE/dIhOb.FtxRiYMuc80nQFPkSrsBH4L6B5.Ka',
        location: 'Washington',
        bio: 'Just a person',
        website: 'https://boldr.io',
        verified: true
      })
    ]))
    .then(() => Promise.all([
      knex('user_role').insert({
        user_id: '1b062e26-df71-48ce-b363-4ae9b966e7a0',
        role_id: 4
      }),
      knex('user_role').insert({
        user_id: 'f4d869a6-1a75-469b-a9cc-965c552929e4',
        role_id: 2
      }),
      knex('user_role').insert({
        user_id: 'f11d3ebf-4ae6-4578-ba65-0c8f48b7f41f',
        role_id: 3
      })
    ]))
    .then(() => Promise.all([
      knex('tag').insert({
        name: 'JavaScript',
        description: 'Something something JS'
      }),
      knex('tag').insert({
        name: 'Stuff',
        description: 'Stuff about stuff.'
      })
    ]))
    .then(() => Promise.all([
      knex('post').insert({
        id: '5c9ed236-79f0-4ff7-93bd-2815f06c74b4',
        title: 'Just Another Post',
        slug: 'just-another-post',
        excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        feature_image: 'https://boldr.io/image1.jpg',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when',
        status: 'published',
        user_id: '1b062e26-df71-48ce-b363-4ae9b966e7a0'
      }),
      knex('post').insert({
        id: 'cb61bbae-c91e-4014-b665-3485734b88fb',
        title: 'Nother One',
        slug: 'nother-one',
        excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        feature_image: 'https://boldr.io/image3.jpg',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when',
        status: 'published',
        user_id: 'f11d3ebf-4ae6-4578-ba65-0c8f48b7f41f'
      }),
      knex('post').insert({
        id: 'ab33a0ca-b349-4cf8-947f-94f415149492',
        title: 'Random Post Title',
        slug: 'random-post-title',
        excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        feature_image: 'https://boldr.io/image2.jpg',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'an unknown printer took a galley of type and scrambled it to make a type specimen book.' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when' +
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when',
        status: 'published',
        user_id: '1b062e26-df71-48ce-b363-4ae9b966e7a0'
      })
    ]))
    .then(() => Promise.all([
      knex('post_tag').insert({
        post_id: '5c9ed236-79f0-4ff7-93bd-2815f06c74b4',
        tag_id: 2
      }),
      knex('post_tag').insert({
        post_id: 'cb61bbae-c91e-4014-b665-3485734b88fb',
        tag_id: 1
      }),
      knex('post_tag').insert({
        post_id: 'ab33a0ca-b349-4cf8-947f-94f415149492',
        tag_id: 2
      })
    ]))
    .then(() => Promise.all([
      knex('setting').insert({
        id: 1,
        site_name: 'Boldr',
        site_url: 'https://boldr.io',
        site_logo: 'https://boldr.io/logo.png',
        site_favicon: 'https://boldr.io/favicon.ico',
        site_slogan: 'Why shouldnt your CMS be a little Boldr?',
        site_description: 'Universal JavaScript CMS powered by React, Redux, Express, and Postgres',
        google_analytics: 'UA-23423',
        allow_registration: true,
        configuration: '{"mail":{"address":"mail@boldr.io"}}'
      })
    ]))
    .then(() => Promise.all([
      knex('navigation').insert({
        name: 'Main',
        primary: true,
        restricted: false,
        location: 'header'
      })
    ]))
    .then(() => Promise.all([
      knex('link').insert({
        name: 'About',
        position: 1,
        href: '/about',
        icon: 'info'
      }),
      knex('link').insert({
        name: 'Blog',
        position: 2,
        href: '/blog',
        icon: 'info'
      })
    ]))
    .then(() => Promise.all([
      knex('navigation_link').insert({
        navigation_id: 1,
        link_id: 1
      }),
      knex('navigation_link').insert({
        navigation_id: 1,
        link_id: 2
      })
    ]));
};
