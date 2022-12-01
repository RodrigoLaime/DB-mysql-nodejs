const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

/* CONFIGURACION */
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');//motor de plantilla

app.set('views', path.join(__dirname, '../app/views'));

/* MIDSLEWARE */
app.use(bodyParser.urlencoded({ extended: false }));//solamanete vamos a pasar datos y no imagenes ni cosas complicadas //se encarga de recivir los inputs por sus atributos name 

module.exports = app;