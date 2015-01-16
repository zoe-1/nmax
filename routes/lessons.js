// lessons.js

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

	 // [Model_findExample]
	 res.render('lessons', {
		 title: 'Lessons Index',
	 });

});


router.step3 = function(req, res) { 
	 // [Model_findExample]
	 res.render('lessons/step3', {
		 title: 'Step 3: Add Express Routes, Controller, and views.',
	 });

}


router.step4 = function(req, res) { 
	 // [Model_findExample]
	 res.render('lessons/step4', {
		 title: 'Step 4: Filter Repeaters Data.',
	 });
}

router.step5 = function(req, res) { 
	 // [Model_findExample]
	 res.render('lessons/step5', {
		 title: 'Step 5: Get json data from Express.',
	 });
}

router.step4_json = function(req, res) { 

	/* res.render('lessons/step4', {
		 title: 'Step 4: Filter Repeaters Data.',
	 });
	*/

	var json_data={ "title":"Step 4: Angular App & Controller load partials and json data.", 
	"description":"Illustrate how Angular uses ", 
	"file_changes":[{"name":"public/javascripts/app4.js", "description":"Create a module to manage the application controller. This file configures which partial a controller will use."},
	{"name":"public/javascripts/controller_step4.js", "description":"Create a controller for this application module."}, 
	{"name":"views/partials/step4_template.ejs", "description":"partial file to load html from. app4.js configures this file to be used."}, 
{"name":"app.js", "description":"configure route step4, step4_json, step4_template"},
	{"name":"routes/lessons.js", "description":"configure route step4, step4_json, step4_template"},
	{"name":"views/lessons/step4.ejs", "description":"Basic HTML template using an Angularjs Module Controller set up using partial HTML views"}
	]
	};

	res.json(json_data);
}

router.step4_template = function(req, res) { 

	// Loads this template as partial into ag controller.
	res.render('partials/step4_template', {
		 title: 'Step 4: Partial Data.',
	 });
}

router.step6 = function(req, res) { 
	
	 var ua = req.headers['user-agent'];

	 $ = {};
	 	
	 console.log("user-agent:\n%s",ua);

	 if (/Android/.test(ua)) {
		 console.log("got Android"); 
		 $.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];
	 }else if (/iPhone/.test(ua)) {
		 console.log("got iPhone"); 
		 // $.iPhone = /iPhone/.test(ua);
		 $.iPhone = true;
		 console.log("iPhone: %s", $.iPhone); 
		 res.render('lessons/step3', {
			 title: 'Step 6: I-Phone :-) ',
		 });
	 }else if (/iPad/.test(ua)) {
		 console.log("got iPad"); 
		 $.iPad = true;
		 res.render('lessons/step6', {
			 title: 'Step 6: I-Pad :-) ',
		 });
	 }else {
		 console.log("not iPhone or Droid"); 
		 res.render('lessons/step6', {
			 title: 'Step 6: Work with user-agent data.',
		 });
	 }



}

module.exports = router;
