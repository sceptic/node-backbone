var app = require('./app/bootstrap')
var home=require('./app/routes/home');
var blog=require('./app/routes/blog');


app.use('/', home);
app.use('/blog', blog.rutas);

app.listen(3000);