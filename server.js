'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Module dependencies
var express = require('express'),
    http = require('http'),
    config = require('./lib/config/config');

/**
 * Main application file
 */

var app = express();

// Express settings
require('./lib/config/express')(app);

// Sequelize
/*
var sequelize = require('./lib/db/sequelize');

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
var server = app.listen(config.port, config.ip, function () {
  console.log('Express server listening on %s:%d, in %s mode', config.ip, config.port, app.get('env'));
});

var io = require('socket.io').listen(server);

// Events
require('./lib/events')(app, io);

// Expose app
exports = module.exports = app;
