const express = require("express");

const {
  getItems,
  getItemsById,
  createItems,
} = require("../controller/infoController");
const router = express.Router();

router.get("/info", getItems);
router.get("/info/:id", getItemsById);
router.post("/info", createItems);

module.exports = router;
