const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const encTableRoute = require("./routes/EncTableRouter");
const testRouter = require("./routes/TestRouter");

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(
    () => console.log("Connected to MonsterBase DB."),
    err => console.log("Cannot connect to MonsterBase DB.")
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => res.send("Hello World!"));

//
app.use("/encTable", encTableRoute);
app.use("/test", testRouter);

app.listen(port, () => console.log(`Server running on port: ${port}`));


// test server:
// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
