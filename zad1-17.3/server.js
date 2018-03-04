var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs')
var stringifyFile;

path = require("path");

app.use(bodyParser.json());



app.get('/getNote', function(req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});
app.post('/updateNote/:note', function (req, res) {
    stringifyFile + req.params.note;
    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        res.send(req.params.note);
        console.log('file updated');
    });
});

app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});

