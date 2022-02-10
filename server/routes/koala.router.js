const express = require("express");
const { Pool } = require("pg");
const koalaRouter = express.Router();

// DB CONNECTION

// GET
koalaRouter.get("/", (req, res) => {
  // let successMessage = {
  //     message: 'Success'
  // }
  let queryText = 'SELECT * FROM "allKoalas"';
  console.log("GETTING?!");
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("GET ERROR", error);
      res.sendStatus(500);
    });

  // res.send(successMessage)
});

// POST
koalaRouter.post("/", (req, res) => {
  console.log(req.body);

  res.sendStatus(200);
});

// PUT

// DELETE

module.exports = koalaRouter;
