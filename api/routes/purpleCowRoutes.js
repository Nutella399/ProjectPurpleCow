'use strict'; 

module.exports = function(app){
    var purpleCow = require('../controllers/purpleCowController'); 

    app.route('/items')
        .get(purpleCow.retrieveItems)
        .post(purpleCow.createItems)
        .delete(purpleCow.deleteAll); 
}