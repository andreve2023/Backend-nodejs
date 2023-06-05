const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MySchema = new Schema({
    name: String
})

const model = mongoose.model('User', MySchema)


module.exports = model;