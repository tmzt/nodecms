
require.paths.unshift('./lib');

var http = require('http');
var fs = require('fs');
var util = require('util');
var url = require('url');

//var redis = require('redis-node');

var express = require('express');
//var RedisStore = require('./connect-redis');

var app = express.createServer();
app.set('view engine', 'jade');

app.use(express.bodyDecoder());
app.use(express.cookieDecoder());
//app.use(express.session({store: new RedisStore}));
app.use(express.session());

app.configure('development', function() {
  app.use(express.logger());
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function() {
  app.use(express.logger());
  app.use(express.errorHandler()); 
});

app.get('/ajax/:p1/:p2', function(req, res) {
	var user = {uid: (req.session.uid != null) ? req.session.uid : -1};
	var options = {locals: {user: user}, layout: null};
    res.render(req.params.p1+'/'+req.params.p2, options);
});

app.get('/ajax/:p1', function(req, res) {
        var user = {uid: (req.session.uid != null) ? req.session.uid : -
1};
        var options = {locals: {user: user}, layout: null};
    res.render(req.params.p1, options);
});

app.get('/ajax', function(req, res) {
        //res.writeHead(200, {'Content-Type': 'text/html'});
        var user = {uid: (req.session.uid != null) ? req.session.uid : -
1};
        var options = {locals: {user: user}};
        res.render('index', options);
});

app.get('/:p1/:p2', function(req, res) {
	var user = {uid: (req.session.uid != null) ? req.session.uid : -1};
	var options = {locals: {user: user}};
    res.render(req.params.p1+'/'+req.params.p2, options);
});

app.get('/:p1', function(req, res) {
        var user = {uid: (req.session.uid != null) ? req.session.uid : -
1};
        var options = {locals: {user: user}};
	res.render(req.params.p1, options);
});

app.get('/', function(req, res) {
	var user = {uid: (req.session.uid != null) ? req.session.uid : -1};
	var options = {locals: {user: user}};
	res.render('index', options);
});

module.exports = app;
