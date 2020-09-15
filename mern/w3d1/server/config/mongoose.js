const mongoose = require('mongoose');

// connect to DB, pass options object to quiet warning
// uses a promise to response if successful or error
mongoose.connect("mongodb://localhost/db-example4", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));