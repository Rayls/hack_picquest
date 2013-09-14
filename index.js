/*
Dawson Reid
Glavin Wiechert

A basic index.js template for Node.js projects using socket.io and
express.
*/

var 
  http = require('http'),
  util = require('util'),
  fs = require('fs'),
  url = require('url'),
  express = require('express');

var userStore = {};

// create and init my server
var 
    app = express(),
    server = http.createServer(app),
    memStore = new express.session.MemoryStore();

console.log('Configuring server.');

app.configure(function(){
  
  // web server config
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname));
  
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  
  // session support
  app.use(express.cookieParser());
  app.use(express.session({
        store: memStore,
        secret: 'piquest',
        key: 'piquest.sid'
    }));
    
    app.use(app.router);
});

console.log('Starting server.');

/*
Here is where all of the app.get(... code goes. 
*/

app.get('/', function(req, resp) {
    resp.sendfile('site/base.html');
});

app.get('/login', function(req, resp) {
    resp.sendfile('site/login.html');
});

app.get('/home', function(req, resp) {
    resp.sendfile('site/home.html');
});

server.listen(1337);

io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    
    console.log('Socket connection.');

});
