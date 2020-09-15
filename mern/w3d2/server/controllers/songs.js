const mongoose = require("mongoose");
const Song = mongoose.model("Song");

module.exports = {
    all: (req, res) => {
        Song.find()
            .then((songs) => {
                console.log(songs);
                res.json(songs);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    getOne: (req, res) => {
        Song.findOne({_id: req.params.id})
            .then((song) => {
                console.log(song);
                res.json(song);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    delete: (req, res) =>{
        Song.deleteOne({_id: req.params.id})
            .then((song) => {
                console.log(song);
                res.json(song);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    update: (req, res)=>{
        Song.updateOne({_id: req.params.id}, req.body)
            .then((song) => {
                console.log(song);
                res.json(song);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    create: (req, res) => {
        Song.create(req.body)
            .then((song) => {
                console.log(song);
                res.json(song);
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    }
}