module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'article', {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
        title: {
          type: DataTypes.STRING(150),
          allowNull: false
        },
        slug: {
          type: DataTypes.STRING(150),
          allowNull: false,
          unique: true
        },
        featureImage: {
          type: DataTypes.STRING(256),
          defaultValue: ''
        },
        content: {
          type: DataTypes.TEXT,
          defaultValue: ''
        },
        excerpt: {
          type: DataTypes.TEXT,
          defaultValue: ''
        },
        markup: {
          type: DataTypes.JSON,
          defaultValue: '',
          allowNull: true
        },
        authorId: {
          type: DataTypes.UUID
        },
        status: {
          type: DataTypes.ENUM,
          allowNull: false,
          values: ['draft', 'published', 'archived'],
          defaultValue: 'published'
        },
        views: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          allowNull: true
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('article');
  }
};
