// require node modules
const express = require('express');
const cors = require('cors');

// create app instance and definite port
const app = express();
const port = 9002;

// connect middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// require in config and routes
require('./server/config/mongoose');
require('./server/routes/routes')(app);

// listen on port
app.listen(port, () => console.log(`Listening on port: ${port}`) );