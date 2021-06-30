"use strict";

const siteController = {

};

siteController.getHome = (req, res) => {
	res.render("homepage", {css: "css/style.css"});
};


siteController.getTestFormat = (req, res) => {
	res.render("testformat", { css: "/css/testformat.css" });
};


siteController.getListening = (req, res) => {
	res.render("listening", { css: "/css/listening.css" });
};

siteController.getReading = (req, res) => {
	res.render("reading", { css: "/css/reading.css" });
};

siteController.getSpeaking = (req, res) => {
	res.render("speaking", { css: "/css/speaking.css" });
};

siteController.getWriting = (req, res) => {
	res.render("writing", { css: "/css/writing.css" });
};

siteController.getPracticeTests = (req, res) => {
	res.render("practicetests", { css: "/css/practicetests.css" });
};

siteController.getTestResults = (req, res) => {
	res.render("testresults", { css: "/css/testresults.css" });
};

siteController.getAcademicTests = (req, res) => {
	res.render("academictests", { css: "/css/academictests.css" });
};

siteController.getGeneralTests = (req, res) => {
	res.render("generaltests", { css: "/css/generaltests.css" });
};


module.exports = siteController;
