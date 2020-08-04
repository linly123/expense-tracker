const Record = require("../record");
const db = require("../../config/mongoose");

db.once("open", () => {
  Record.create(
    { name: "午餐", date: "2020/07/24", amount: 60, category: "餐飲食品" },
    { name: "晚餐", date: "2020/07/22", amount: 60, category: "餐飲食品" },
    { name: "捷運", date: "2020/07/18", amount: 120, category: "交通出行" },
    {
      name: "電影； 驚奇隊長",
      date: "2020/07/14",
      amount: 220,
      category: "休閒娛樂",
    },
    { name: "租金", date: "2020/07/01", amount: 25000, category: "家居物業" }
  ).then(() => {
    db.close();
  });
  console.log("done");
});
