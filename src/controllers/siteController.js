"use strict";

//Dependencies


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

siteController.handleUpload = (req, res) => {

	req.flash('message', 'Upload successful');

	
	res.redirect('/welcome');
	
	
}

module.exports = siteController;
