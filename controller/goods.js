const Goods = require("../models/goods");


class GoodssController {
  //상품전체조회
  getAllGoods = async (req, res, next) => {
    const goods = await Goods.find({});
    if (!goods.length) {
      return res
        .status(201)
        .json({ success: false, errorMessage: "없는 데이터입니다." });
    }

    res.status(201).json({ goods: goods });
  };

  //상품상세조회
  getGoods = async (req, res, next) => {
    const { id } = req.params;
    console.log("id", id);
    const goods = await Goods.find({ goodsId: id });
    if (!goods.length) {
      return res
        .status(400)
        .json({ success: false, errorMessage: "없는 데이터입니다." });
    }
    res.status(201).json({ goods: goods });
  };

  //상품 입력
  postGoods = async (req, res, next) => {
    const { goodsId, name, thumbnailUrl, category, price } = req.body;

    const goods = await Goods.find({ goodsId });
    if (goods.length) {
      return res
        .status(400)
        .json({ success: false, errorMessage: "이미 있는 데이터입니다." });
    }

    const createdGoods = await Goods.create({
      goodsId,
      name,
      thumbnailUrl,
      category,
      price,
    });

    res.status(201).json({ goods: createdGoods });
  };

  putGoods = async (req, res, next) => {
    const { goodsId, name, thumbnailUrl, category, price } = req.body;

    const goods = await Goods.find({ goodsId });
    if (!goods.length) {
      return res
        .status(400)
        .json({ success: false, errorMessage: "없는 데이터입니다." });
    }

    await Goods.updateOne(
      { goodsId },
      { $set: { name, thumbnailUrl, category, price } }
    );

    res.status(201).json({ msg: "Product updated successfully." });
  };

  //상품 삭제
  deleteGoods = async (req, res, next) => {
    const { id } = req.params;

    const isGoods = await Goods.find({ goodsId: id  });
    if (!isGoods.length) {
      return res
        .status(400)
        .json({ success: false, errorMessage: "없는 데이터입니다." });
    }

    await Goods.deleteOne({ goodsId: id });

    res.status(201).json({ msg: "삭제 성공" });
  };
}


module.exports = GoodssController;
