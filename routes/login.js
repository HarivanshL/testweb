const express = require("express");
const router = express.Router();
const path = require('path');


router.get("/", (req, res) => {
    res.sendFile('/Users/harivansh/Documents/School/CS3203/testweb/projects/login.html')
});


router.post("/", (req, res) => {
    try {
        console.log(JSON.stringify(req))
    } catch (error) {
        
    }
    res.sendFile('/Users/harivansh/Documents/School/CS3203/testweb/projects/restaurants.html')
    return
    const formData = document.querySelector('.form');
    formData.addEventListener('submit', event => {
    event.preventDefault();
  
    const fData = new FormData(formData);
    const data = Object.fromEntries(formData);
  
    for (item of fData){
      console.log(item)
    }
    

    });
  
  
    res.sendFile('/Users/harivansh/Documents/School/CS3203/testweb/projects/restaurants.html')
});

module.exports = router

//let d = new Date();
//document.body.getElementById.innerHTML = "<h1>Today's date is " + d + "</h1>"