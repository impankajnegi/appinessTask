const bodyParser = require('body-parser');
const express = require('express');


const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
require('./routes/databaseRoutes.js')(app);
//require('./routes/dialogFlowRoutes')(app);
app.listen(5000);