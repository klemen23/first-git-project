var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

exports.start = function(){
    
    
    app.get('/', function(req, res){
        
        res.send('hello world');
    });

    app.listen(port, function(){
    
    console.log('Server running');
    
    });
    
};