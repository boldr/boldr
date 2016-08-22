module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'post_tag', {
        tagId: {
          type: DataTypes.INTEGER,
          field: 'tag_id'
        },
        postId: {
          type: DataTypes.UUID,
          field: 'post_id'
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('post_tag');
  }
};
