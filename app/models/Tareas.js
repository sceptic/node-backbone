var proyectos=require('./model');
var _=require("underscore");

var Tareas = {

	getAll: function(id_project){
		_.each(proyectos, function(project){
			if(id_porject == project.proyecto)
			{
				return project.tareas;
			}
		});

	}

}


module.exports=Tareas;