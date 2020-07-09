const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const hbsForm = require('handlebars-form-helpers');

//Set up the body parser to handle POST requests
app.use(bodyParser.urlencoded({extended : false}));
const fs = require('./pizza.json')

//Set up the Handlebars Template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {heading:'Order Pizza',heading3:'Name', heading4:'Contact',heading5:fs.topping[0]});
});

app.post('/add', (req, res) => {
    console.log('Body is ', req.body);
    const name = req.body.name;
    const contact = req.body.contact;
    const topping = req.body.topping;
    
    res.render('index', {heading : 'Order Pizza',heading3:'Name', heading4:'Contact', heading5:'topping'})
});
app.listen(3000, () => {
    console.log('Listening on port 3000....');
});