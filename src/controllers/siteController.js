"use strict";

const siteController = {

};

siteController.getHome = (req, res) => {
	res.render("home", {
		css: "css/style.css",
		src: "",
		title: "Lektore"
	});
}


siteController.getHomePage = (req, res) => {
	
	console.log(req.user);
	res.render("homepage", {
		css: "css/homepage.css",
		src: "",
		user: req.user,
		title: "Lektore"
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


module.exports = siteController;
