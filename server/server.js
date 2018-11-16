const express = require('express');
require('dotenv').config();
const massive = require('massive');
const controller = require('./controller');

const {SERVER_PORT, MASSIVE_CONNECTION} = process.env;

const app = express();

massive(MASSIVE_CONNECTION).then(db => {
    app.set('db',db);
    console.log('Database Connected');
})


//Middleware
app.use(express.json());

// How to create sub folders in the db folder and call them in the server using massive.
// app.get('api/test',(req, res) => {req.get('db').folder.file})

app.get(`/product/brand/get-all`,controller.allBrands)


 

app.listen(SERVER_PORT, console.log(`The Great Outdoors is calling on port ${SERVER_PORT}`));