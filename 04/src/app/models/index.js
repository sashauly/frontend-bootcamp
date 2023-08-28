import fs from 'fs';
import Sequelize from 'sequelize';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

// const { config } = JSON.parse(fs.readFileSync('../config/config.json'));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const configPath = path.join(__dirname, '..', 'config', 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
console.log(basename);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// fs.readdirSync(__dirname)
//   .filter(
//     (file) =>
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//   )
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
export default db;
