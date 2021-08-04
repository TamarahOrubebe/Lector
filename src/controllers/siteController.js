"use strict";


//Dependencies
const currencySymbol = require("currency-symbol");
const CC = require('currency-converter-lt');
const geoip = require("geoip-lite");
const RequestIp = require("@supercharge/request-ip");
const getCurrency = require('iso-country-currency');
const fetch = require('node-fetch');
const ipapi = require('ipapi.co');



// Set up Site Controllers
const siteController = {

};


siteController.getHomePage = (req, res) => {
	
	res.render("homepage", {
		css: "css/homepage.css",
		src: "",
		title: "Lektore"
	});
};

siteController.getWelcome = (req, res) => {
	

	res.render("welcome", {
		css: "css/welcome.css",
		src: "/js/script.js",
		user: req.user,
		hList: [],
		title: "Welcome",
		message: req.flash('message')
	});
};



siteController.getTestFormat = (req, res) => {
	res.render("testformat", {
		css: "/css/testformat.css",
		src: "",
		title:"Test Format"
	});
};


siteController.getListening = (req, res) => {
	res.render("listening", {
		css: "/css/listening.css",
		src: "",
		title: "Listening"
	});
};

siteController.getReading = (req, res) => {
	res.render("reading", {
		css: "/css/reading.css",
		src: "",
		title: "Reading"
	});
};

siteController.getSpeaking = (req, res) => {
	res.render("speaking", {
		css: "/css/speaking.css",
		src: "",
		title: "Speaking"
	});
};

siteController.getWriting = (req, res) => {
	res.render("writing", {
		css: "/css/writing.css",
		src: "",
		title: "Writing",
	});
};


siteController.getElocution = (req, res) => {
	res.render("elocution", {
		css: "/css/elocution.css",
		src: "",
		title: "Elocution",
	});
};


siteController.getPracticeTests = (req, res) => {
	res.render("practicetests", {
		css: "/css/practicetests.css",
		src: "",
		title: "Practice Tests",
	});
};


siteController.getTestResults = (req, res) => {
	res.render("testresults", {
		css: "/css/testresults.css",
		src: ""
	});
};


siteController.getAcademicTests = (req, res) => {
	res.render("academictests", {
		css: "/css/academictests.css",
		src: "/js/script.js",
		title: "Academic Practice Tests",
	});
};


siteController.getGeneralTests = (req, res) => {
	res.render("generaltests", {
		css: "/css/generaltests.css",
		src: "/js/script.js",
		title: "General Practice Tests",
	});
};


siteController.getPricing = (req, res) => {
	res.render("pricing", {
		css: "/css/pricing.css",
		src: "/js/script.js",
		title: "Pricing",
	});
};


siteController.handlePricing = (req, res) => {

	console.log(req.body, req.user);


	
	const ip = RequestIp.getClientIp(req);

	console.log(ip);

	var geo = geoip.lookup(ip);

	console.log(geo);

	const currency = getCurrency.getAllInfoByISO(geo.country).currency;

	const currencyConverter = new CC({
		from: "GBP",
		to: `${currency}`,
		amount: parseInt(req.body.amount),
	});


	currencyConverter.convert().then((response) => {
		res.render("paymentinfo", {
			user: req.user,
			amount: "GBP" + " " + req.body.amount,
			localAmount: "" + currency + " " + parseFloat(response).toFixed(2),
			css: "/css/paymentinfo.css",
			src: "/js/script.js",
			title: "Payment-Info",
		});
	});

	
};



siteController.handleCheckout = (req, res) => {

	console.log(req.body);

	let { email, localAmount } = req.body;

	localAmount = localAmount.slice(3);

	console.log(parseInt(localAmount));

	
	
	const body = { email, amount: parseInt(localAmount) * 100 };

	console.log(body);

	
	fetch("https://api.paystack.co/transaction/initialize", {
		method: "post",
		body: JSON.stringify(body),
		headers: {
			Authorization: "Bearer" + " " + process.env.TEST_SECRET_KEY,
			"Content-Type": "application/json",
		},
	}).then((res) => res.json())
		.then((jsonResponse) => {
			console.log(jsonResponse)

			const redirectUrl = jsonResponse.data.authorization_url;

			res.redirect(redirectUrl);

		}).catch((err) => console.log(err));
		
		
};


siteController.getSuccess = (req, res) => {

	console.log(req.query.trxref)

	fetch("https://api.paystack.co/transaction/verify/" + req.query.trxref, {
		method: "get",
		headers: {
			Authorization: "Bearer" + " " + process.env.TEST_SECRET_KEY,

		},
	})
		.then((res) => res.json())
		.then((response) => {
			console.log(response);

			res.render("success", {
				reference: req.query.trxref,
				status: response.data.status,
				user: req.user,
				css: "/css/success.css",
				src: "/js/script.js",
				title: "Success",
			});
		})
		.catch((err) => console.log(err));


			
		
};



siteController.handleUpload = (req, res) => {

	if (!req.file) {
			
		req.flash('message', 'No file chosen');

		res.redirect('/welcome');
		res.end();
	} else {
		req.flash("message", "Upload successful");
		console.log(req.file);

		res.redirect("/welcome");
		
	}

		
		
}
siteController.getContactUs = (req, res) => {

	
	res.render("contactus", {
		user: req.user,
		css: "/css/contactus.css",
		src: "/js/script.js",
		title: "Contact us",
	});



}

		
		


module.exports = siteController;
