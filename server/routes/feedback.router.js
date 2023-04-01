const pool = require("../modules/pool");
const router = express.Router();
const express = require("express");
router.get("/", (req, res) => {
  // get feedback from database
  pool
    .query('SELECT * FROM "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /feedback", error);
      res.sendStatus(500);
    });
});

module.exports = router;
