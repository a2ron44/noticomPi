/**
 * Module dependencies.
 */
var config = require('./config');
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var fs = require('fs');
var engine = require('ejs-locals');

var app = express();
// all environments
app.set('port', config.port);
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.set('config', config);
global.appRoot = path.resolve(__dirname);

app.use(express.favicon());
//app.use(express.logger({stream: logFile}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: '181715vsdf'}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

console.log(app.get('env'));
// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

routes(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
