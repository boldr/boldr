module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable(
        'category', {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: DataTypes.STRING(30),
            allowNull: false
          },
          description: {
            type: DataTypes.STRING(256),
            allowNull: true
          },
          image: {
            type: DataTypes.STRING(256),
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
    return queryInterface.dropTable('category');
  }
};
