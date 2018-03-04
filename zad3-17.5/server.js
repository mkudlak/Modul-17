var express = require('express');
var app = express();

app.use('/store', function(req, res, next){
    res.send('To jest sklep');
    console.log('Jestem pośrednikiem przy żądaniu do /store');
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});