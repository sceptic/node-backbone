var ProyectoModel = Backbone.Model.extend({

	defaults:{
		proyecto:"Hola triste mundo"
	},

	initialize: function(){

	}
});



var ProyectoView = Backbone.View.extend({

	initialize: function(){
		self = this;
		this.model.on('change', function(){
			console.log("change");
			self.render();
		});
	},
	el:"#main",
	render: function(){
		this.$el.html(this.model.get('frase'));
	}

});


var ProyectosView = Backbone.View.extend({
	

	initialize: function(){
		self = this;
		this.collection.on('add', function(){
			console.log("add");
			self.render();
		});
		self.render();
	},

	el:"#collection",

	render: function(){
		self=this;
		self.$el.html("");
		_.each(self.collection.models, function(model){
			console.log(model);
			self.$el.append("<p>"+model.get('proyecto')+"</p>");
		})
		
	}

});


var ProyectoCollection= Backbone.Collection.extend({
	url: '/proyectos',
	model:ProyectoModel
});







console.log('xx hola 5');
var p = new ProyectoModel();
var c = new ProyectoCollection();
var v= new ProyectosView({collection:c});

c.fetch();

