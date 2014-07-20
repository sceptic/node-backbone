var proyectos=require('./model');
var _=require("underscore");

var Proyecto = {

	getAll: function(){
		return proyectos;
	}
	
}


module.exports=Proyecto;