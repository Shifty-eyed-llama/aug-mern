const { Person } = require('../models/Person');
// controllers require models

// controllers are just a collection of HTTP methods returned of module exports
// in MERN, they are represented by CRUD operations

// controllers are named after and talk to models

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}