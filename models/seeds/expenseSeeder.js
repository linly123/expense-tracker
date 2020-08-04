const Expense = require("../expense"); //在todo.js 已設名為todo
const db = require("../../config/mongoose");

db.once("open", () => {
  Expense.create(
    { name: "午餐", date: "2020/07/24", amount: 60 },
    { name: "晚餐", date: "2020/07/22", amount: 60 },
    { name: "捷運", date: "2020/07/18", amount: 120 },
    { name: "電影； 驚奇隊長", date: "2020/07/14", amount: 220 },
    { name: "租金", date: "2020/07/01", amount: 25000 }
  ).then(() => {
    db.close();
  });
  console.log("done");
});
