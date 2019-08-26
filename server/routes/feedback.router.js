const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.post('/', (req, res) => {

    const newFeedback = req.body;

    // making sql request with security in mind
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`;

    // send a query to the database
    // grab the data that existed in the Reduxstore
    pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then((result) => {
            console.log(`Added feedback to the database`, newFeedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // a good server always responds
        })
})

module.exports = router;