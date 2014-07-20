var express = require('express');
var router = express.Router();
var path    = require('path');
function Router(){

	this.init();
}

Router.prototype.init=function(){

	router.get("/posts", function (req, res) {
	
	    res.json({"posts":[
	    	{
	    		"title":"mi primer post",
	    		"content":"contenido"
	    	}
	    ]});
	});

	router.post("/posts", function (req, res) {
	  posts.insert(req.body, function (result) {
	    res.json(result);
	  });
	});

	this.rutas=router;
} 

var rutas = Router.prototype;


module.exports = new Router();