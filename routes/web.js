
module.exports = function (app) {
    
	app.get('/', function(req, res) {
		res.render('index', {
			title : 'Home Noticom System',
		});
	});
	
	
	
	app.get('/message', function(req, res) {
		res.render('message', {
			title : 'Send Message'
		});
	});


};