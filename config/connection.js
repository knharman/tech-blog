const Sequelize = require('sequelize');
require('dotenv').config();
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + '/config.json')[env];

if (config.use_env_variable) {
  const sequelize = new Sequelize(process.env[config.use_env_variable]);
  module.exports = sequelize;
} else {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  ); 
  module.exports = sequelize;
}