const Expense = require("../expense"); //在todo.js 已設名為todo
const db = require("../../config/mongoose");

db.once("open", () => {
  Expense.create({ name: "午餐", date: "2020/08/01", amount: 45 });
  console.log("done");
});
