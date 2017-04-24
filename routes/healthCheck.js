var express = require('express');
var router = express.Router();

/* GET standard home page. */
router.get('/health', function(req, res) {
    res.status(200).send('I\'m Ok!');
});

module.exports = router;
