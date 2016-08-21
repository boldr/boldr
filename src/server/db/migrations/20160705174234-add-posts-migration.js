module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
      'post', {
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
          defaultValue: '',
          field: 'feature_image'
        },
        content: {
          type: DataTypes.TEXT,
          defaultValue: ''
        },
        excerpt: {
          type: DataTypes.TEXT,
          defaultValue: ''
        },
        userId: {
          type: DataTypes.UUID,
          field: 'user_id'
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
          type: DataTypes.DATE,
          field: 'created_at',
          defaultValue: new Date()
        },
        updatedAt: {
          type: DataTypes.DATE,
          field: 'updated_at',
          defaultValue: new Date()
        }
      }
    );
  },

  down(queryInterface) {
    return queryInterface.dropTable('post');
  }
};
