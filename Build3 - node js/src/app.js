const express = require("express");
const bodyParser = require("body-parser");
const userRouters = require("./Routes/UserRoutes")

console.log('started');

const app = express();

//pass data as json object
app.use(bodyParser.json());

app.use('/build3/v1/user', userRouters);

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  
module.exports = app;
