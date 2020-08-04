const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const expenseSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  data: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
