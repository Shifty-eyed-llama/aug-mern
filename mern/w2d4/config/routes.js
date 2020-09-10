const Fake = require('../models/Fake');
const fakes = require('../controllers/fakes');

module.exports = (app) => {

    // routing rules
    app.get("/create", fakes.create)
    app.get("/show", fakes.show)
    // ...

};