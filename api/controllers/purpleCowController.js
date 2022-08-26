'use strict'; 

let items = []; 
let item_id = 0; 

exports.retrieveItems = function(req, res) {
    res.json(items); 
}

exports.createItems = function(req, res) {
    var new_item = req.body; 
    new_item["id"] = item_id; 
    item_id = item_id +1; 
    items.push(new_item); 
    res.json(items); 
}

exports.deleteAll = function(req, res) {
    items = []; 
    res.json({message: "All Items sucessfully deleted "})
}