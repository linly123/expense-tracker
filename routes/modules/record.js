//引用Express 與 Express 路由器
const express = require("express");
const router = express.Router();

const Record = require("../../models/record");

router.get("/new", (req, res) => {
  return res.render("new");
});

//新增記錄
router.post("/", (req, res) => {
  const { name, date, category, amount } = req.body;
  return Record.create(req.body)
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

//修改記錄:get
router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  const format = "YYYY-MM-DD";
  const categories = ["家居物業", "交通出行", "休閒娛樂", "餐飲食品", "其他"];
  return Record.findById(id)
    .lean()
    .then((record) => res.render("edit", { record, categories, format }))
    .catch((error) => console.log(error));
});

//修改記錄:put
router.put("/:id", (req, res) => {
  const id = req.params.id;
  return Record.findById(id)
    .then((record) => {
      Object.assign(record, req.body);
      return record.save();
    })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  return Record.findById(id)
    .then((record) => record.remove())
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

module.exports = router;
