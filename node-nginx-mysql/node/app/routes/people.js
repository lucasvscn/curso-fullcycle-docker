var express = require('express');
var router = express.Router();
var db = require('../services/db.js')

/* GET names listing. */
router.get('/', function(req, res, next) {
    let sql = `SELECT * FROM people ORDER BY id DESC`
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "OK"
        })
    })
});

/* POST create a new name. */
router.post('/', function(req, res, next) {
    let sql = `INSERT INTO people (name) VALUES (?)`
    let values = [
        req.body.name
    ]
    db.query(sql, [values], function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "New name registered!"
        })
    })
});

module.exports = router;
