var app = require('../bootstrap')
var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/homecontroller')(app);

router.use(function(req, res, next) {
	next();
});

router.get('/home', HomeController.homeAction);
router.get('/proyectos', HomeController.proyectosAction);
router.get('/proyecto/:id', HomeController.proyectoAction);
router.get('/proyecto/:id/:tarea', HomeController.tareaAction);

module.exports = router;

