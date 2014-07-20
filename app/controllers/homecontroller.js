var app;
var Proyectos = require("../models/proyecto");
var Actions={}

var init=function(_app){

	app=_app;

	Actions.homeAction= function(req, res, next)
	{
		console.log(Proyectos.getAll());
		res.render('home');
		
	}


	Actions.proyectosAction= function(req, res, next)
	{
		  console.log("PROYECTOS ALL!!!!");
		  res.json(Proyectos.getAll());
	}


	Actions.proyectoAction= function(req, res, next)
	{
		  console.log("proyecto!!!!");
		  res.render('home');
	}


	Actions.tareaAction= function(req, res, next)
	{
		  console.log("tarea!!!!");
		  res.render('home');
	}


	return Actions;

}

module.exports = init;