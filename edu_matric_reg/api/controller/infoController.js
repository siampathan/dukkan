const Info = require("../models/infoModel");

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

module.exports = {
  getItems,
  getItemsById,
  createItems,
};
