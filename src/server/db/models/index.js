import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import sqConfig from '../sqConfig';

const config = sqConfig['development'];
const basename = path.basename(module.filename);
const db = {};

// const dbUrl = process.env[config.use_env_variable];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter((file) =>
    (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
