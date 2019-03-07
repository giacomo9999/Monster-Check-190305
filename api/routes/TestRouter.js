const express = require("express");
const testRoutes = express.Router();

testRoutes.get("/", (req, res) => {
    const message = "Test Route Working.";
    res.json(message);
    console.log("TestRouter: route successfully checked.")
  });

  module.exports = testRoutes;
