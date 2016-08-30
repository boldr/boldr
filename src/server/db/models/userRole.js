import DataTypes from 'sequelize';
import Model from '../sequelize';
import { User, Role } from './index';

const UserRole = Model.define('user_role', {
  userId: {
    type: DataTypes.UUID,
    field: 'user_id',
    references: {
      model: User,
      key: 'id'
    },
    allowNull: false,
    onDelete: 'cascade'
  },
  roleId: {
    type: DataTypes.INTEGER,
    field: 'role_id',
    references: {
      model: Role,
      key: 'id'
    },
    allowNull: false,
    onDelete: 'cascade'
  }
}, {
  uniqueKeys: {
    unique: {
      fields: ['user_id', 'role_id']
    }
  },
  tableName: 'user_role',
  freezeTableName: true,
  timestamps: false
});

export default UserRole;
