const express = require('express');
require('dotenv').config();
const massive = require('massive');
const controller = require('./controller');
const authCTRL = require('./authCTRL');
const session = require('express-session')
const custCTRL = require('./custCTRL');
const prodCTRL = require('./prodCTRL');
const stripeCTRL = require('./stripeCTRL');

const {SERVER_PORT, MASSIVE_CONNECTION, SECRET, keyPublishable, keySecret} = process.env;

const app = express();

massive(MASSIVE_CONNECTION).then(db => {
    app.set('db',db);
    console.log('Database Connected');
})


//Middleware
app.use(express.json());
//express.json is used in place of body-parser
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use( express.static( `${__dirname}/../build` ) );

// How to create sub folders in the db folder and call them in the server using massive.
// app.get('api/test',(req, res) => {req.get('db').folder.file})

app.get(`/product/brand/get-all`,controller.allBrands)

app.post('/auth/signup', authCTRL.signup)

app.post(`/auth/login`,authCTRL.login)

app.post(`/cust/add-address`, custCTRL.addAddress)

app.get(`/api/clothing/mens`, prodCTRL.getAllMensClothes)

app.get(`/api/clothing/womens`, prodCTRL.getAllWomensClothes)

app.get(`/api/cart/:id`, prodCTRL.getCart)

app.post(`/api/cart/add`, prodCTRL.addToCart)

app.put(`/api/cart/add/one`, prodCTRL.addOneToQTY)

app.put(`/api/cart/minus/one`, prodCTRL.minusOneToQTY)

app.delete(`/api/cart/delete/:product_id/:cust_id`, prodCTRL.deleteFromCart)

app.post(`/api/cart/checkout`, prodCTRL.checkOut)

app.delete(`/api/cart/checkout/:id`, prodCTRL.deleteCart)

//stripe url

app.post(`/api/cart/checkout/charge`, stripeCTRL.postRequest)

 

app.listen(SERVER_PORT, console.log(`The Great Outdoors is calling on port ${SERVER_PORT}`));