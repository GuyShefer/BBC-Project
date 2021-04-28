const mongoose = require("mongoose");
require("dotenv").config();

// const url =
// "mongodb+srv://theadanhy:jWWD68udl5cItzDV@cluster0.bbbcy.mongodb.net/items?retryWrites=true&w=majority";

const url = process.env.MONGODB;
const connection = mongoose.connection;

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

connection.once("open", () => {
  console.log("Connected Database Successfully");
});
