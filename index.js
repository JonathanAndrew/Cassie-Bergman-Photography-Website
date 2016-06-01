var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

app.get('/',function(req,res){
	res.render('index.ejs');
});

app.get('/about',function(req,res){
	res.render('about.ejs');
})

app.get('/wedding', function(req,res){
	res.render('wedding.ejs');
})
app.get('/wedding-gallery', function(req,res){
	res.render('weddingGallery.ejs');
})

app.listen(3000);