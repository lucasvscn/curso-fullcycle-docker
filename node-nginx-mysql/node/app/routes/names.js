var express = require('express');
var router = express.Router();

/* GET names listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* POST create a new name. */
router.post('/', function(req, res, next) {
    res.send('new name created!');
});

module.exports = router;
