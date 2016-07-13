import DataType from 'sequelize';
import Model from '../sequelize';

const Token = Model.define('tokens', {
  kind: {
    type: DataType.STRING,
    allowNull: false
  },
  accessToken: {
    type: DataType.STRING,
    allowNull: false
  },
  userId: {
    type: DataType.UUID
  }
}, {
  tableName: 'tokens',
  freezeTableName: true,
  timestamps: false
});
export default Token;
