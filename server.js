
const express = require('express');
const app = express();

const path = require('path');


const PORT = process.env.PORT || 3000

const intialRoute = require("./routes/initial")
const loginRoute = require("./routes/login")

app.use(express.static(__dirname));
app.use("/initial", intialRoute)
app.use("/login", loginRoute)

/*
//where we expose files or directories for public use
app.use(',', express.static(path.join(__dirname, '/public')));

//where we set our routes
/*app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});



//Use a static file /css
app.use(express.static(__dirname));

//This is what happens when the client runs get
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
});

//since our html form is post this is what happens on post
app.post("/", (req, res) => {
  res.send("Thank you for subscribing");
});
*/

//The port the app will listen on
app.listen(PORT, () => console.log(`server running on port ${PORT}`))

app.get("/", (req, res) => {
  res.sendFile('/Users/harivansh/Documents/School/CS3203/testweb/projects/first.html')
  //res.send("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
});
