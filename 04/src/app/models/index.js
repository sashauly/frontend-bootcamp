import Sequelize from 'sequelize';
import {
  HOST,
  USER,
  PASSWORD,
  DB,
  dialect as _dialect,
  pool as _pool,
} from '../config/db.config.js';

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: _dialect,
  operatorsAliases: 0,

  pool: {
    max: _pool.max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define('tutorial', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Tutorial;
};

export default db;