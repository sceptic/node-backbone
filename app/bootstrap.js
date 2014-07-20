var express = require('express');
var app = express();
var swig = require("swig");

//Motor de plantilla
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views',__dirname+'/views');

//Archivos públicos
app.use(express.static('./public'));

app.set('nombre','Adrian');


module.exports = app;