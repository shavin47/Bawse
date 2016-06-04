module.exports = function(app) {

	//Serves Up The Index File
	app.get('*', function(req, res) {		

		res.send('./public/index.html');

	});

};