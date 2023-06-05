const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MySchema = new Schema({
    users: [
        {
            type: Schema.ObjectId,
            ref: 'User'
        }
    ]
})

const model = mongoose.model('Chat', MySchema)


module.exports = model;