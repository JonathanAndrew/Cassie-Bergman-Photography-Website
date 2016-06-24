var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var env = require('env2')('config.env');  

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

router.post('/', handleBook);

function handleBook(req,res){
	var transporter = nodemailer.createTransport({
		service : 'Gmail',
		auth: {
			user : process.env.USER_EMAIL,
			pass : process.env.PASSWORD
		}
	});
var message = "Name: " + req.body.first + " " + req.body.last + "\n" + "Phone-Number: " + req.body.phone + "\n" + "Email: " + req.body.email + "\n" + "Date: " + req.body.date + "\n" + "Number of Attendees: " + req.body.eventDescription + "\n" + "Description: " + req.body.message;
// var email = req.body.email;
var input = req.body.email;

var mailOptions = {
	from: input, // sender address
	to: process.env.USER_EMAIL, // list of receivers
	subject: 'REQUESTING PHOTOGRAPHER', // Subject line
	text: message //, // plaintext body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        return console.log(error);
    }else{
     	console.log('Message sent: ' + info.response);
 	    res.redirect('/');
 	};
		// res.redirect('/');
   		
    });
};

module.exports = router;