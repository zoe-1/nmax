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

module.exports = router;
