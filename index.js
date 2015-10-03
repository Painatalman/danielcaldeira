var express = require('express');
var app = express();

////////////////////////////////////////////
//
// DB CONFIG ()
//
/////////////////////////////////////////////

var dbConfig = require('./config/dbConfig.js');
// if first parameter is set to true, it will connect to the remote database
dbConfig.init(true);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
