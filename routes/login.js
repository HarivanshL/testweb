const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile('/Users/harivansh/Documents/School/CS3203/testweb/projects/login.html')
});

router.post("/", (req, res) => {
    
});

module.exports = router

//let d = new Date();
//document.body.getElementById.innerHTML = "<h1>Today's date is " + d + "</h1>"