const Sequelize = require('sequelize');
require("dotenv").config();

const sequelizeInstance = new Sequelize(
 `mysql://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DB}`
);

module.exports = sequelizeInstance;