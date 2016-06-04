/* ========================================== MODULES ================================================= */
var express        = require('express');
var app            = express();
var config         = require('./config/config');

/* ========================================== CONFIGURATION =========================================== */
app.use(express.static(__dirname + '/public')); 

/* ========================================== ROUTING =========================================== */
require('./app/routes')(app);

//Create an instance of express router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	next(); // make sure we go to the next routes and don't stop here
});


/* ========================================== STARTING THE SERVER =========================================== */
//Setting up port
app.listen(3000);
console.log('Server started @ port ' + 3000);
exports = module.exports = app;