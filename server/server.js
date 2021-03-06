require('./config/config');

const express = require('express')
const mongoose = require('mongoose');
const colors = require('colors/safe');

const app = express()

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use (require('./routes/usuario'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if (err) throw err;
    console.log(colors.cyan.bold("===================="));
    console.log(colors.underline.cyan.bold('Base de datos ONLINE'));
});

app.listen(process.env.PORT, () => {
  console.log(colors.underline.cyan.bold("______________________"));
  console.log(colors.underline.cyan.bold("escuchando port: ", process.env.PORT));
})