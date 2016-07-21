import DataTypes from 'sequelize';
import Model from '../sequelize';

const VerificationToken = Model.define('verification_token', {
  token: DataTypes.STRING,
  userId: DataTypes.UUID,
  expiresAt: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'verification_token',
  freezeTableName: true
});

export default VerificationToken;
