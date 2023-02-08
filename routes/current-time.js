const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const time = `
        {
            "time": "${Date()}"
        }
    `
    res.send(time);
});

module.exports = router;