const express = require("express");
const encTableRoutes = express.Router();

// require encounter table schema model
let EncTable = require("../models/encounterTable.model");

// define 'new table' route
encTableRoutes.route("/add").post((req, res) => {
  console.log("Router: Attempting to add new table ");
  let encTable = new EncTable(req.body);
  encTable
    .save()
    .then(encTable => {
      res
        .status(200)
        .json({ encTable_says: "MonsterBase: Table saved successfully." });
    })
    .catch(err => {
      res.status(400).send("MonsterBase: Unable to save to DB.");
    });
});

// define get data route
encTableRoutes.route("/").get((req, res) => {
  EncTable.find((err, encTables) => {
    if (err) {
      console.log(err);
    } else {
      res.json(encTables);
    }
  });
});

// define edit route, AKA 'get one.'
encTableRoutes.route("/edit/:id").get((req, res) => {
  console.log("Router: Attempting to edit existing table ");
  let id = req.params.id;
  EncTable.findById(id, (err, encTable) => {
    res.json(encTable);
  });
});

// define update route
encTableRoutes.route("/update/:id").post((req, res) => {
  console.log("Router: Attempting to update table params on DB");
  EncTable.findById(req.params.id, (err, encTable) => {
    if (!encTable) {
      res.status(404).send("MonsterBase: Table not found.");
    } else {
      encTable.regionName = req.body.regionName;
      encTable.regionType = req.body.regionType;
      encTable.regionDifficulty = req.body.regionDifficulty;
      encTable
        .save()
        .then(encTable => {
          res.json("Update complete.");
        })
        .catch(err =>
          res.status(400).send("MonsterBase: Unable to update the MB database.")
        );
    }
  });
});

// define delete route
encTableRoutes.route("/delete/:id").get((req, res) => {
  console.log("Router: Attempting to delete table from DB");
  EncTable.findByIdAndRemove({ _id: req.params.id }, (err, encTable) => {
    if (err) {
      res.json(err);
    } else {
      res.json("MonsterBase: Entry successfully removed.");
    }
  });
});

module.exports = encTableRoutes;
