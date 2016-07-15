module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'article_tag', {
        tagId: {
          type: DataTypes.UUID
        },
        articleId: {
          type: DataTypes.UUID
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('article_tag');
  }
};
