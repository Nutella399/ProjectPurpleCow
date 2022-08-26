var express = require('express'), 
    app = express(), 
    port = process.env.PORT || 3000; 
var bodyParser = require('body-parser'); 
var cors = require('cors'); 


app.use(cors()); 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()); 


var routes = require('./api/routes/purpleCowRoutes'); 
routes(app); 

app.listen(port); 
console.log("purple cow RESTful API server started on: " + port); 