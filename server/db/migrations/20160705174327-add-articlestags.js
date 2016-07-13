module.exports = {
  up(queryInterface, DataType) {
    return queryInterface.createTable(
      'articles_tags', {
        tagId: {
          type: DataType.UUID
        },
        articleId: {
          type: DataType.UUID
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('articles_tags');
  }
};
