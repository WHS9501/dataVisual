const express = require("express");
const Aggbattdata1ms = require("../controller/aggbattdata1ms")
const aggbattdata1ms = new Aggbattdata1ms();

const router = express.Router();

router.post("/aggbattdata1ms",aggbattdata1ms.getChartData)


module.exports = router;

