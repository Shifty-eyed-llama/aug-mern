const PersonController = require('../controllers/persons');
// routes require controllers

// a function that takes app
// all of our routes, calling their specific controller methods


module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/people/:id', PersonController.getPerson);

    // app.get("/api/people/:id", PersonController.getOnePerson)
}