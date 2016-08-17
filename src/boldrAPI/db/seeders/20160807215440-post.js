module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('post', [
      {
        id: 'fa543b68-1c7a-478d-babb-06db9cda0d99',
        title: 'Temp Article 1',
        slug: 'temp-article-1',
        feature_image: 'http://boldr.s3.amazonaws.com/uploads/photo-1465417001205-3e465bfad7.jpg',
        content: '<h1>Lorem</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis mollis tellus, quis egestas ipsum. Donec vitae magna eget elit molestie consequat accumsan sit amet massa. Sed eget bibendum erat, a interdum mauris. Fusce dapibus magna at sodales blandit. Vivamus ut tincidunt purus. Cras tincidunt nisi ac turpis aliquet, sit amet aliquet sem aliquam. Sed tincidunt dolor ac quam porta, volutpat laoreet tortor pellentesque. Cras ac justo finibus, porta libero ac, dapibus leo. Nunc turpis nibh, venenatis ac feugiat nec, ullamcorper id odio. Nulla finibus eros a blandit tincidunt. Morbi at ligula velit. Nunc consequat arcu sit amet aliquam mollis.</p><p><strong>fasfasffsadfasfafffsfasfasaasfsff</strong></p>',
        excerpt: 'Etiam fringilla sit amet nisi in sagittis. Suspendisse potenti. Duis aliquet lobortis augue, eu suscipit nibh congue eget.',
        user_id: '7070c5e2-70e5-4c63-9116-2b5439c460c0',
        status: 'published',
        views: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'fa524b68-1c7a-478d-babb-06db9cda0d99',
        title: 'Temp Article 2',
        slug: 'temp-article-2',
        feature_image: 'http://boldr.s3.amazonaws.com/uploads/photo-1465328610639-388f315eb3.jpg',
        content: '<h1>Lorem</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis mollis tellus, quis egestas ipsum. Donec vitae magna eget elit molestie consequat accumsan sit amet massa. Sed eget bibendum erat, a interdum mauris. Fusce dapibus magna at sodales blandit. Vivamus ut tincidunt purus. Cras tincidunt nisi ac turpis aliquet, sit amet aliquet sem aliquam. Sed tincidunt dolor ac quam porta, volutpat laoreet tortor pellentesque. Cras ac justo finibus, porta libero ac, dapibus leo. Nunc turpis nibh, venenatis ac feugiat nec, ullamcorper id odio. Nulla finibus eros a blandit tincidunt. Morbi at ligula velit. Nunc consequat arcu sit amet aliquam mollis.</p><p><strong>fasfasffsadfasfafffsfasfasaasfsff</strong></p>',
        excerpt: 'Etiam fringilla sit amet nisi in sagittis. Suspendisse potenti. Duis aliquet lobortis augue, eu suscipit nibh congue eget.',
        user_id: '7070c5e2-70e5-4c63-9116-2b5439c460c0',
        status: 'published',
        views: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'fa524b68-1c7a-378d-babb-06db4cda0d99',
        title: 'Temp Article 3',
        slug: 'temp-article-3',
        feature_image: 'http://boldr.s3.amazonaws.com/uploads/photo-1465284958051-1353268c07.jpg',
        content: '<h1>Lorem</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis mollis tellus, quis egestas ipsum. Donec vitae magna eget elit molestie consequat accumsan sit amet massa. Sed eget bibendum erat, a interdum mauris. Fusce dapibus magna at sodales blandit. Vivamus ut tincidunt purus. Cras tincidunt nisi ac turpis aliquet, sit amet aliquet sem aliquam. Sed tincidunt dolor ac quam porta, volutpat laoreet tortor pellentesque. Cras ac justo finibus, porta libero ac, dapibus leo. Nunc turpis nibh, venenatis ac feugiat nec, ullamcorper id odio. Nulla finibus eros a blandit tincidunt. Morbi at ligula velit. Nunc consequat arcu sit amet aliquam mollis.</p><p><strong>fasfasffsadfasfafffsfasfasaasfsff</strong></p>',
        excerpt: 'Etiam fringilla sit amet nisi in sagittis. Suspendisse potenti. Duis aliquet lobortis augue, eu suscipit nibh congue eget.',
        user_id: '7070c5e2-70e5-4c63-9116-2b5439c460c0',
        status: 'published',
        views: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'fc424b68-1c7a-478d-babb-06db9cda0d99',
        title: 'Temp Article 4',
        slug: 'temp-article-4',
        feature_image: 'http://boldr.s3.amazonaws.com/uploads/photo-1464245254346-067e4f8baa.jpg',
        content: '<h1>Lorem</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis mollis tellus, quis egestas ipsum. Donec vitae magna eget elit molestie consequat accumsan sit amet massa. Sed eget bibendum erat, a interdum mauris. Fusce dapibus magna at sodales blandit. Vivamus ut tincidunt purus. Cras tincidunt nisi ac turpis aliquet, sit amet aliquet sem aliquam. Sed tincidunt dolor ac quam porta, volutpat laoreet tortor pellentesque. Cras ac justo finibus, porta libero ac, dapibus leo. Nunc turpis nibh, venenatis ac feugiat nec, ullamcorper id odio. Nulla finibus eros a blandit tincidunt. Morbi at ligula velit. Nunc consequat arcu sit amet aliquam mollis.</p><p><strong>fasfasffsadfasfafffsfasfasaasfsff</strong></p>',
        excerpt: 'Etiam fringilla sit amet nisi in sagittis. Suspendisse potenti. Duis aliquet lobortis augue, eu suscipit nibh congue eget.',
        user_id: '7070c5e2-70e5-4c63-9116-2b5439c460c0',
        status: 'published',
        views: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'ec424b28-1c7a-478d-babb-06db2cda0d99',
        title: 'Temp Article 5',
        slug: 'temp-article-5',
        feature_image: 'http://boldr.s3.amazonaws.com/uploads/photo-1451188214936-ec16af5ca155.jpg',
        content: '<h1>Lorem</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis mollis tellus, quis egestas ipsum. Donec vitae magna eget elit molestie consequat accumsan sit amet massa. Sed eget bibendum erat, a interdum mauris. Fusce dapibus magna at sodales blandit. Vivamus ut tincidunt purus. Cras tincidunt nisi ac turpis aliquet, sit amet aliquet sem aliquam. Sed tincidunt dolor ac quam porta, volutpat laoreet tortor pellentesque. Cras ac justo finibus, porta libero ac, dapibus leo. Nunc turpis nibh, venenatis ac feugiat nec, ullamcorper id odio. Nulla finibus eros a blandit tincidunt. Morbi at ligula velit. Nunc consequat arcu sit amet aliquam mollis.</p><p><strong>fasfasffsadfasfafffsfasfasaasfsff</strong></p>',
        excerpt: 'Etiam fringilla sit amet nisi in sagittis. Suspendisse potenti. Duis aliquet lobortis augue, eu suscipit nibh congue eget.',
        user_id: '7070c5e2-70e5-4c63-9116-2b5439c460c0',
        status: 'published',
        views: 0,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('post', null, {});
  }
};
