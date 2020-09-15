const songs = require('../controllers/songs');

module.exports = (app) => {

    app.get("/songs", songs.all)
       .get("/songs/:id", songs.getOne)
       .post("/songs", songs.create)
       .delete("/songs/:id", songs.delete)
       .put("/songs/:id", songs.update);

}