/**
 * Module dependencies.
 */

var config = require('lib/config');
var jade = require('jade');
var path = require('path');
var resolve = path.resolve;
var t = require('t-component');
var html = jade.renderFile(resolve(__dirname, 'index.jade'), { config: config, t: t });
// var html = (resolve(__dirname, 'index.html'));
// var html = require('./template.html');
var express = require('express');
var app = module.exports = express();



app.get('/teste', function (req, res, next) {
  res.send(html);
});

// app.get('/teste', function (req, res, next) {
//   res.send("teste");
// });




// app.get('*', function (req, res, next) {
//   res.send(404, html);
// });

