import DataTypes from 'sequelize';
import Model from '../sequelize';

const Token = Model.define('token', {
  kind: {
    type: DataTypes.STRING,
    allowNull: false
  },
  accessToken: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID
  }
}, {
  tableName: 'token',
  paranoid: true,
  freezeTableName: true,
  timestamps: false
});
export default Token;
