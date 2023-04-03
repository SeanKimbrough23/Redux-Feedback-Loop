const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET feedback from database
router.get("/", (req, res) => {
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

//POST REQUEST
router.post("/", (req, res) => {
  const newFeedback = req.body;
  const { feeling, understanding, support, comments } = newFeedback; // deconstructing

  const queryText = `
        INSERT INTO feedback ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;

  const queryValues = [feeling, understanding, support, comments];

  pool
    .query(queryText, queryValues)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error with POST ${queryText}`, error);
      res.sendStatus(500);
    });
});

// PUT  REQUEST /:id
router.put("/:id", (req, res) => {
  const queryText = `
        UPDATE feedback SET flagged=$1 WHERE id=$2;
    `;

  pool
    .query(queryText, [req.body.newState, req.params.id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error with PUT ${queryText}`, error);
      res.sendStatus(500);
    });
});
// DELETE /:id Request
router.delete("/:id", (req, res) => {
  const queryText = `
        DELETE FROM feedback WHERE id=$1;
    `;

  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      console.log(`Error with DELETE ${queryText}`, error);
      res.sendStatus(500);
    });
});
module.exports = router;
