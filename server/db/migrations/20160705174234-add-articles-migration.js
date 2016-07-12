module.exports = {
  up(queryInterface, DataType) {
    return queryInterface.createTable(
      'articles', {
        id: {
          type: DataType.UUID,
          primaryKey: true,
          defaultValue: DataType.UUIDV4
        },
        title: {
          type: DataType.STRING(256),
          allowNull: false
        },
        slug: {
          type: DataType.STRING(256),
          allowNull: false,
          unique: true
        },
        featureImage: {
          type: DataType.STRING(256),
          defaultValue: ''
        },
        content: {
          type: DataType.TEXT,
          defaultValue: ''
        },
        excerpt: {
          type: DataType.TEXT,
          defaultValue: ''
        },
        markup: {
          type: DataType.JSON,
          defaultValue: '',
          allowNull: true
        },
        authorId: {
          type: DataType.UUID
        },
        status: {
          type: DataType.ENUM,
          allowNull: false,
          values: ['draft', 'published', 'archived'],
          defaultValue: 'draft'
        },
        views: {
          type: DataType.INTEGER,
          defaultValue: 0,
          allowNull: true
        },
        createdAt: {
          allowNull: false,
          type: DataType.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataType.DATE
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('articles');
  }
};
