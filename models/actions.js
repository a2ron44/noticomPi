var exec = require('child_process').exec;

module.exports.sendBuzz = function(wavFile, homeCode, length) {
	callback = new Object();
	callback.err = null;
	callback.data = null;

	var cmd = 'mpg321 ' + appRoot + '/public/sounds/' + wavFile;

	console.log(' "' + cmd + '"');
	console.log('Buzzer Sent');
	exec(cmd);

	callback.data = 1;
	return callback;

};

module.exports.sendTalk = function(text,config) {
	callback = new Object();
	callback.err = null;
	callback.data = null;

	// Dependencies
	var querystring = require("querystring");
	var fs = require('fs');
	var request = require('request');
	
	var tts_type = config.tts_type;
	
	switch (tts_type){
	
	case 'google':
		var lang = config.tts_google_lang;
		var file = config.tts_file;
		
		// App variables
		var encodedText = querystring.stringify({q: text});
		var file_url =  "http://translate.google.com/translate_tts?&tl=" + lang + "&" + encodedText;
		var DOWNLOAD_DIR = __dirname + '/public/sounds/';
console.log(file_url);
		var r = request(file_url, function(error, response, buffer) {
			console.log(error)
			console.log(response);
		}).pipe(fs.createWriteStream(DOWNLOAD_DIR + file));

		r.on('finish', function () { 
			var cmd = 'mpg321 ' + appRoot + '/public/sounds/' + file;

			console.log(' "' + cmd + '"');
			console.log('Message Played');
			exec(cmd);
			
			callback.data = 1;
			return callback;}
		);
		
		
		break;
	case 'voicerss':
		
		var lang = config.tts_voicerss_lang;
		var file = config.tts_file;
		var apikey = config.tss_voicerss_apikey;
		var audioFormat = config.tss_voicerss_format;
		var playSpeed = config.tss_voicerss_speed;
		var apiUrl = config.tss_voicerss_url;
		
		// App variables
		var keyString = querystring.stringify({key: apikey});

		var file_url =  apiUrl + "?" + keyString + "&hl=" + lang + "&r=" + playSpeed + "&f=" + audioFormat + "&src=" + text;
		var DOWNLOAD_DIR = appRoot + '/public/sounds/';
		console.log('API Attempt: ' + file_url);
		var r = request(file_url, function(error, response, buffer) {
//			console.log(error);
//			console.log(response);
		}).pipe(fs.createWriteStream(DOWNLOAD_DIR + file));

		r.on('finish', function () { 
			var cmd = 'mpg321 ' + appRoot + '/public/sounds/' + file;

			console.log(' "' + cmd + '"');
			console.log('Message Played');
			exec(cmd);
			
			callback.data = 1;
			return callback;}
		);
		
		
		break;
	default:
		console.log('Must select proper TTS type in config');
		return;
	}
	
	return callback;

};

