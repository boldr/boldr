import DataTypes from 'sequelize';
import Model from '../sequelize';
import User from './user';

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
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  tableName: 'token',
  freezeTableName: true,
  timestamps: false
});
export default Token;
