// server.js

// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var path    = require('path');
var port    =   process.env.PORT || 8080;

// ROUTES
// ==============================================
var fs = require('fs');

var obj;
fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) {
      throw err;
    };
    obj = JSON.parse(data);
    console.log(obj)
});

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// sample route with a route the way we're used to seeing it
app.get('/', function(req, res) {
    // res.send("Test");
    app.use(express.static(path.join(__dirname)));
    res.render(path.join(__dirname + '/index.html'), res.json(obj));
    res.render(path.join(__dirname + '/index.html'));
});

// sample route with a route the way we're used to seeing it
app.get('/blog', function(req, res) {
    app.use(express.static(path.join(__dirname)));
    res.render(path.join(__dirname + '/thoughts.html'));
});

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
