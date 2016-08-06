module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'post_tag', {
        tagId: {
          type: DataTypes.INTEGER
        },
        postId: {
          type: DataTypes.UUID
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('post_tag');
  }
};
