var express = require('express'),
    debug = require('debug')('app4');

var environment = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[environment];

require('./server/config/express')(app, config);

require('./server/config/routes')(app);

app.listen(config.port, function(){
    console.log('Listening on port: ' + config.port + '...');
   //debug('Express server listening on port ' + server.address().port);
});