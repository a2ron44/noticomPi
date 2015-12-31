module.exports = function(app) {
	actions = require('../models/actions');

	/*
	 * buzz - Play Buzzer/Alert
	 * 
	 * POST /buzz/
	 * 
	 */
	app.post('/buzz/', function(req, res) {
		callback = new Object();
		callback.err = null;
		callback.data = null;
		
		config = app.get('config');
		
		console.log('Sending Buzz... ');

		var output = actions.sendBuzz(config.wav_buzz, 1,1);
		
		console.log(output);
		
		callback.data = 1;
		res.send(callback);

	});


	/*
	 * talk - Play Talk Message (TTS)
	 * {text} String - text to turn into message (text to speech)
	 * POST /talk/
	 * 
	 */
	app.post('/talk/', function(req, res) {
		
		callback = new Object();
		callback.err = null;
		callback.data = null;
		
		var options = req.body;
		
		config = app.get('config');
		
		console.log('Msg: "' + options.text + '"');

		var output = actions.sendTalk(options.text,config, function(callback){
			
		});
		
		console.log(output);
		callback.data = 1;
		res.send(callback);

	});
	
};