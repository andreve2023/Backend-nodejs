const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

async function connect(url) {
    mongoose.connect(url, {
        useNewUrlParser: true
    })
    console.log('db conectada con exito')
}

module.exports = connect