const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

const Hotel = sequelize.define('hotel', {
    // id
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Name
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Address
    Address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Description
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {timestamps: false});

// initialize the table
Hotel.sync();
module.exports = Hotel;