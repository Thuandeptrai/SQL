const express = require("express");
const cors = require("cors");
const app = express();
const Sequelize = require("sequelize");
const sequelizeInstance = require("./config/connection");
const Hotel = require("./Model/Hotel");

const Room = require("./Model/RoomTable");
const RoomType = require("./Model/RoomType");
require("dotenv").config();
console.log(
  `${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DB}`
);
const testFunc = async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
testFunc();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const createHotel = async () => {
    try {
      const hotel = await Hotel.create({
        Name: "Test Hotel",
        Address: "Test Address",
        Description: "Test Description"
      });
      console.log(hotel.toJSON());
      res.send(hotel.toJSON());
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  createHotel();
});
app.get("/2", (req, res) => {
  const createHotel = async () => {
    try {
      const hotel = await RoomType.create({
        Name: "Test Hotel",
        Price_PER_NIGHT: 100
      });
      console.log(hotel.toJSON());
      res.send(hotel.toJSON());
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  createHotel();
});
app.get("/roomTable", (req, res) => {
  const createRoom = async () => {
    try {
      const room = await Room.create({
        Hotel_ID: 1,
        Room_Type_ID: 1,
        Available: true,
        Description: "Test Description"
      });
      console.log(room.toJSON());
      res.send(room.toJSON());
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  createRoom();
});
app.get("/roomTable/:id", (req, res) => {
  const getRoom = async () => {
    try {
      const room = await Room.findOne({
        where: {
          ID: req.params.id
        },
        include: [
          {
            model: Hotel,
            as: "Hotel"
          },
          {
            model: RoomType,
            as: "RoomType"
          }
        ]
      });
      console.log(room.toJSON());
      res.send(room.toJSON());
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  getRoom();
});

app.delete("/roomTable/:id", (req, res) => {
  const deleteRoom = async () => {
    try {
      const room = await Room.destroy({
        where: {
          ID: req.params.id
        }
      });
      console.log(room.toJSON());
      res.send(room.toJSON());
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  deleteRoom();
});

app.listen(3010, () => {
  console.log("Server running on port 3010");
});
