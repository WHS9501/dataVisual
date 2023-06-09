const express = require("express");
const goods = require("./goods");
const data = require("./aggbattdata1ms");

const router = express.Router();

router.use("/goods", goods);
router.use("/data", data);

module.exports = router;
