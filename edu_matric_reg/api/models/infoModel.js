const { Sequelize } = require("sequelize");
const db = require("../config/db");

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

module.exports = Info;

(async () => {
  await db.sync();
})();
