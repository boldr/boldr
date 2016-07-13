import DataTypes from 'sequelize';
import Model from '../sequelize';

const VerificationToken = Model.define('verification_tokens', {
  token: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  expiresAt: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'verification_tokens'
});

export default VerificationToken;
