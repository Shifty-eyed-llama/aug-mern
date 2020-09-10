const Fake = require("../models/Fake")

module.exports = {
    create: (req, res) => {
        res.json(new Fake());
    },

    show: (req, res) => {
        res.json([new Fake(), new Fake(), new Fake()])
    }
}