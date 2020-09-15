const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/example17', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log("Connected to DB")})

require("../models/Song");