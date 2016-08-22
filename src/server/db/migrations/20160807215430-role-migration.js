module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.createTable('role', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['active', 'inactive'],
        defaultValue: 'active'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
        field: 'updated_at'
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'deleted_at'
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('role');
  }
};
