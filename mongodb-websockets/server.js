const express = require('express');
const {routes} = require('./network/routes');
const db = require('./db');
db('mongodb+srv://root:Andres20@demo.libza8m.mongodb.net/demo-telegram')
const app = express();

app.use(express.json());
routes(app)

app.use('/app', express.static('public'))

app.listen(3000,() => {
    console.log("liste in port",3000)
})