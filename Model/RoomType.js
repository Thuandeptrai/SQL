const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

const RoomType = sequelize.define('Room_Type', {
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
    // Price
    Price_PER_NIGHT: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {timestamps: true});
RoomType.sync();
module.exports = RoomType;