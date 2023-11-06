const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile('/Users/harivansh/Documents/School/CS3203/testweb/projects/index.html')
});



module.exports = router

