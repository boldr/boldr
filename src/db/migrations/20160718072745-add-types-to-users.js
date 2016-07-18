module.exports = {
  up(queryInterface, DataTypes) {
    queryInterface.addColumn('user', 'type', DataTypes.INTEGER),
    queryInterface.addColumn('user', 'creation', DataTypes.INTEGER),
    queryInterface.addColumn('user', 'resources', DataTypes.ARRAY(DataTypes.INTEGER))

  },

  down(queryInterface) {
    queryInterface.removeColumn('user', 'type'),
    queryInterface.removeColumn('user', 'creation'),
    queryInterface.removeColumn('user', 'resources')
  }
};
