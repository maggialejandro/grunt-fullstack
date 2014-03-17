'use strict';

var path = require('path');

exports.index = function(req, res) {
  	res.render('index', {env: process.env.NODE_ENV});
};

exports.index2 = function(req, res) {
  	res.render('index2', {env: process.env.NODE_ENV});
};