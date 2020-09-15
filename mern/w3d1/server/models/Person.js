const mongoose = require('mongoose');

// models define the schema and structure of each collection
const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });

module.exports.Person = mongoose.model('Person', PersonSchema);