"use strict";

const siteController = {

};

siteController.getHome = (req, res) => {
	res.render("homepage", {
		css: "css/style.css",
		src: ""
	});
};


siteController.getTestFormat = (req, res) => {
	res.render("testformat", {
		css: "/css/testformat.css",
		src: ""
	});
};


siteController.getListening = (req, res) => {
	res.render("listening", {
		css: "/css/listening.css",
		src: ""
	});
};

siteController.getReading = (req, res) => {
	res.render("reading", {
		css: "/css/reading.css",
		src: ""
	});
};

siteController.getSpeaking = (req, res) => {
	res.render("speaking", {
		css: "/css/speaking.css",
		src: ""
	});
};

siteController.getWriting = (req, res) => {
	res.render("writing", {
		css: "/css/writing.css",
		src: ""
	});
};

siteController.getPracticeTests = (req, res) => {
	res.render("practicetests", {
		css: "/css/practicetests.css",
		src: ""
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
		src: "/js/script.js"
	});
};

siteController.getGeneralTests = (req, res) => {
	res.render("generaltests", {
		css: "/css/generaltests.css",
		src: "/js/script.js"
	});
};


module.exports = siteController;
