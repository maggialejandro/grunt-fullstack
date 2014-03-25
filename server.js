'use strict';

// Module dependencies
var express = require('express'),
    http = require('http');

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// Express settings
require('./lib/config/express')(app);

// Sequelize
//var sequelize = require('./lib/db/sequelize');

/* Sequelize Sync
sequelize
  .sequelize
    .sync({force:true})
    .complete(function(err) {
      if (err) {
        throw err
      } else {
          console.log('Sequelize sync complete');
      }
    });
*/

// Routing
require('./lib/routes')(app);

// Start server
var server = http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

var io = require('socket.io').listen(server);

// Events
require('./lib/events')(app, io);

// Expose app
exports = module.exports = app;
