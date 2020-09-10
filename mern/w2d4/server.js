// requires
const express = require("express");

// start the express app
const app = express();

// configure express with middleware
app.use(express.json());

require('./config/routes')(app);

// port and server listener
app.listen(8001, () =>{
    console.log("You are running on port 8001")
})

// CRUD

// CREATE
// READ
// UPDATE
// DELETE