const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const Hotel = require('./Hotel');
const RoomType = require('./RoomType');

const Room = sequelize.define('Room_Table', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // One to many Hotel_ID
    Hotel_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Hotel,
            key: 'ID'
        }
    },
    // One to many Room_Type_ID
    Room_Type_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: RoomType,
            key: 'ID'
        }
    },
    // Available BIT(1)
    Available: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    // Description VARCHAR(255)
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {timestamps: true});
// 
Room.belongsTo(Hotel, {foreignKey: 'Hotel_ID', as: 'Hotel'});
Room.belongsTo(RoomType, {foreignKey: 'Room_Type_ID', as: 'RoomType'});
Room.sync();
module.exports = Room;