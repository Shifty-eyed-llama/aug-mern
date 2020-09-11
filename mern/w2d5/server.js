const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost/my-persons", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Your name must be at least 2 characters long"]
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {timestamps: true})

let Person = mongoose.model("Person", PersonSchema);

app.get("/people", (req, res) => {
    Person.find()
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

// get by id
app.get("/people/:id", (req, res) => {
    Person.findOne({_id: req.params.id})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

// create
app.post("/people", (req, res) => {
    Person.create(req.body)
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

// edit
app.put("/people/:id", (req, res) => {
    Person.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})

// delete
app.delete("/people/:id", (req, res) => {
    Person.findOneAndDelete({_id: req.params.id})
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
})


app.listen(8008, () => {
    console.log("First mongoose on port 8008");
})