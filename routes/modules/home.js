//引用Express 與 Express 路由器
const express = require("express");
const router = express.Router();

const Record = require("../../models/record");

router.get("/", (req, res) => {
  const categories = [
    { category: "家居物業", iconName: "fas fa-home" },
    { category: "交通出行", iconName: "fas fa-shuttle-van" },
    { category: "休閒娛樂", iconName: "fas fa-grin-beam" },
    { category: "餐飲食品", iconName: "fas fa-utensils" },
    { category: "其他", iconName: "fas fa-pen" },
  ];
  const category = req.query.category;
  const recordFind = Record.find();

  if (category !== undefined) {
    if (category === "") {
      recordFind.find();
    } else {
      recordFind.find({ category });
    }
  } else {
    recordFind.find();
  }
  recordFind
    .lean()
    .sort({ date: "desc" })
    .then((record) => {
      const amount = record.map((item) => item.amount);
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const totalAmount = amount.reduce(reducer);
      return res.render("index", { record, totalAmount, categories });
    })
    .catch((error) => console.error(error));
});

module.exports = router;
