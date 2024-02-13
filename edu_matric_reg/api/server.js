const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());

//DB config
const { Sequelize } = require("sequelize");

const db = new Sequelize("edumatric", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

//Info Model
const { DataTypes } = Sequelize;

const Info = db.define(
  "info",
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    _name: DataTypes.STRING,
    _email: DataTypes.STRING,
    _phone: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

//DB controller
const getItems = async (req, res) => {
  try {
    const response = await Info.findAll({
      order: [["_id", "ASC"]],
    });
    res.json(response);
  } catch (err) {
    console.error(err.message);
  }
};

const getItemsById = async (req, res) => {
  try {
    const response = await Info.findOne({
      where: {
        _id: req.params.id,
      },
    });
    res.json(response);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const createItems = async (req, res) => {
  const _name = req.body._name;
  const _email = req.body._email;
  const _phone = req.body._phone;

  try {
    await Info.create({
      _name,
      _email,
      _phone,
    });
    res.status(201).json({ msg: "Item Created Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

//info routes
app.get("/api", getItems);
app.get("/api", getItemsById);
app.post("/api", createItems);

app.listen(PORT, () => {
  console.log(`Server runing at ${PORT}`);
});
