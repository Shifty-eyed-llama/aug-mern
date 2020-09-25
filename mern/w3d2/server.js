// require statements
const express = require('express');
const cors = require('cors');

const port = 8000;

// create express app
const app = express();

// update express app middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// require internal config files
require("./server/config/mongoose");
require('./server/config/routes')(app);

// listen
const io = app.listen(port, () => {console.log(`app on port ${port}`)});

module.exports = io;
