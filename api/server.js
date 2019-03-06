const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const mongoose = require("mongoose");
const encTableRoute = require("./routes/EncTableRouter");

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(
    () => console.log("Connected to MonsterBase DB."),
    err => console.log("Cannot connect to MonsterBase DB.")
  );

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server running on port: ${port}`));
