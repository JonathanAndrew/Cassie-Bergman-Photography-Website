var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
// var bodyParser = require('body-parser');

app.use(ejsLayouts);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
// app.use(bodyParser.urlencoded({ extended: true }));

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
	{title: 'Wedding1', src:'https://c8.staticflickr.com/8/7522/27245000111_5dbe6f1c5b_b.jpg',subject: 'Wedding Photo Print', content: "Hi Cassie, I would like wedding1 photo printed, please choose size: size 1, size 2, size 3"}, 
	{title: 'Wedding2', src:'https://c8.staticflickr.com/8/7677/27244999271_1c6d1864e4_b.jpg'}, 
	{title: 'Wedding3', src:'https://c5.staticflickr.com/8/7664/27282008396_4327a4d07b_b.jpg'},
	{title: 'Wedding4', src:'https://c8.staticflickr.com/8/7312/26708888423_4259fc2aef_b.jpg'},
	{title: 'Wedding5', src:'https://c2.staticflickr.com/8/7111/26708886633_4a2ede3180_b.jpg'},
	{title: 'Wedding6', src:'https://c4.staticflickr.com/8/7753/27245001811_d348cc89bd_b.jpg'},
	{title: 'Wedding7', src:'https://c8.staticflickr.com/8/7246/26838415303_8c498d9d93_b.jpg'},
	{title: 'Wedding8', src:'https://c7.staticflickr.com/8/7055/27169330030_51e0e1b14b_b.jpg'},
	{title: 'Wedding9', src:'https://c7.staticflickr.com/8/7315/27169330750_18986d77ca_b.jpg'},
	{title: 'Wedding10', src:'https://c2.staticflickr.com/8/7304/26838417273_f8b7b0149a_b.jpg'},
	{title: 'Wedding11', src:'https://c3.staticflickr.com/8/7143/27169332010_de11516f4f_b.jpg'},
	{title: 'Wedding12', src:'https://c4.staticflickr.com/8/7342/26838418643_49b30e4d5e_b.jpg'},
	{title: 'Wedding13', src:'https://c8.staticflickr.com/8/7476/26838419183_398ec3ea5c_b.jpg'},
	{title: 'Wedding14', src:'https://c1.staticflickr.com/8/7226/27169333040_dfd055a5a0_b.jpg'},
	{title: 'Wedding15', src:'https://c1.staticflickr.com/8/7091/27169333440_d41199083b_b.jpg'},
	{title: 'Wedding16', src:'https://c8.staticflickr.com/8/7104/27446018695_8ea0fe5f42_b.jpg'},
	{title: 'Wedding17', src:'https://c7.staticflickr.com/8/7762/27169333910_491d5f77b7_b.jpg'},
	{title: 'Wedding18', src:'https://c8.staticflickr.com/8/7388/27446019175_c0418be9fc_b.jpg'},
	{title: 'Wedding19', src:'https://c8.staticflickr.com/8/7343/27374182111_dbb67d9bfe_b.jpg'},
	{title: 'Wedding20', src:'https://c2.staticflickr.com/8/7314/26838421993_d0a71a2532_b.jpg'},
	{title: 'Wedding21', src:'https://c6.staticflickr.com/8/7336/27374183581_03bc413d07_b.jpg'},
	{title: 'Wedding22', src:'https://c8.staticflickr.com/8/7043/27374184631_c71fecfa56_b.jpg'},
	{title: 'Wedding23', src:'https://c2.staticflickr.com/8/7673/26838424793_76d5c88e89_b.jpg'},
	{title: 'Wedding24', src:'https://c2.staticflickr.com/8/7026/26838426073_8c17895e5f_b.jpg'},
	{title: 'Wedding25', src:'https://c2.staticflickr.com/8/7026/26838426073_8c17895e5f_b.jpg'},
	{title: 'Wedding26', src:'https://c4.staticflickr.com/8/7296/26838430483_906984a394_b.jpg'},
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

app.get('/engagement', function(rew,res){
	res.render('engagement.ejs');
})

app.listen(3000);