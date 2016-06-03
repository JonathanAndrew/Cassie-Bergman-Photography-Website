var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');

app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
	res.render('index.ejs');
});

app.get('/about',function(req,res){
	res.render('about.ejs');
});

app.get('/wedding', function(req,res){
	res.render('wedding.ejs');
});

var weddingImages = [
	{title: 'wedding1', src:'https://c8.staticflickr.com/8/7522/27245000111_5dbe6f1c5b_b.jpg'}, 
	 {title: 'wedding2', src:'https://c8.staticflickr.com/8/7677/27244999271_1c6d1864e4_b.jpg'}, 
	 {title: 'wedding3', src:'https://c5.staticflickr.com/8/7664/27282008396_4327a4d07b_b.jpg'},
	 {title: 'wedding4', src:'https://c8.staticflickr.com/8/7312/26708888423_4259fc2aef_b.jpg'},
	 {title: 'wedding5', src:'https://c2.staticflickr.com/8/7111/26708886633_4a2ede3180_b.jpg'},
	 {title: 'wedding6', src:'https://c4.staticflickr.com/8/7753/27245001811_d348cc89bd_b.jpg'}
	
];

app.get('/wedding-gallery', function(req,res){
	res.render('weddingGallery.ejs',{weddingImages: weddingImages});
});

app.get('/wedding-images/:idx',function(req,res){
	imagesIdx = parseInt(req.params.idx);
	console.log(imagesIdx);
	if(imagesIdx >= 0 && imagesIdx < weddingImages.length){
		res.render('weddingShow.ejs',{
			weddingImages: weddingImages[imagesIdx]
		}); 
	} else {
			res.send('error');
	};
});

app.listen(3000);