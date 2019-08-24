const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


router.post('/', (req, res) => {
    const newFeedback = req.body;
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`;

    pool.query(sqlText, ["1", "1", "1", "here are some comments"])
        .then((result) => {
            console.log(`Added song to the database`, newFeedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})




    module.exports = router;