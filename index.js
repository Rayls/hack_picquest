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
  express = require('express'),
  path = require('path'),
  https = require('https'); //for image upload -Andrew

var userStore = {};

// create and init my server
var 
    app = express(),
    server = https.createServer({
      key: fs.readFileSync('keys/server.key', 'utf8'),
      cert: fs.readFileSync('keys/server.crt', 'utf8')
    }, app),
    memStore = new express.session.MemoryStore();

var swig = require('swig');
swig.setDefaults({ 
  cache: false 
});
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views','site' + '/views');
app.set('view cache', false);


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
app.use(express.bodyParser({uploadDir:'/site/files'}));


console.log('Starting server.');

/*
Here is where all of the app.get(... code goes. 
*/

app.get('/login', function(req, resp) {
    resp.render('login');
});


app.get('/home', function(req, resp) {
    resp.render('home');
});

app.get('/profile', function(req, resp) {
    resp.render('profile');
});

app.get('/achievement', function(req, resp) {
    resp.render('achievement');
});

/* Upload code */
app.get('/upload', function(req, resp) {
    resp.sendfile('site/upload.html');
});

app.get('/success', function(req, resp) {
    resp.sendfile('site/success.html');
});

// ...
app.post('/success', function (req, res) {
    var tempPath = req.files.file.path,
        targetPath = path.resolve('./site/files/image.png');
    if (path.extname(req.files.file.name).toLowerCase() === '.png') {
        fs.rename(tempPath, targetPath, function(err) {
            if (err) throw err;
            console.log("Upload completed!");
        });
    } else {
        fs.unlink(tempPath, function () {
            if (err) throw err;
            console.error("Only .png files are allowed!");
        });
    }
    res.writeHead(302, { 'Location': './site/success.html'});
    // ...
res.end();
});

app.get('/files/image.png', function (req, res) {
    res.sendfile(path.resolve('./files/image.png'));
});





server.listen(1338);

io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    
    console.log('Socket connection.');

});
