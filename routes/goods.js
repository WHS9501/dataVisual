const express = require("express");
const Goods = require("../controller/goods");
const GoodsController = new Goods();

const router = express.Router();

router.get("/",GoodsController.getAllGoods)
router.get("/:id",GoodsController.getGoods)
router.put("/",GoodsController.putGoods)
router.post("/",GoodsController.postGoods)
router.delete("/:id",GoodsController.deleteGoods);



module.exports = router;

