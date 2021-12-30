const express = require("express");
// const bodyParser = require("body-parser");
// const userRoutes = require("../routes/shares.js");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");
const router = require("../routes/shares");

require("dotenv").config();

mongoose.connect(
  "mongodb+srv://TestUserr:rhino123456@new-project.ply7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => console.log("connected to the database!!!")
);
// const Port = process.env.PORT || 8080;

const app = express();

app.use(cors());

// app.use(bodyParser.json());

app.use("/.netlify/functions/api", router);

// app.listen(Port, () => {
//   console.log(`Server Started on http://localhost:${Port}`);
// });

module.exports.handler = serverless(app);
