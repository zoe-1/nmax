
var express = require('express');
var router = express.Router();


router.step5_template = function(req, res) { 
	 // [Model_findExample]
	 res.sendfile(__dirname+'/../view/partials/my.html');

}

module.exports = router;
