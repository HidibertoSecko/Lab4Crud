const mongoose = require("mongoose");
const databasename = "crud";
mongoose.connect("mongodb://172.19.0.2:27017/crud" + databasename);
module.exports = mongoose;
