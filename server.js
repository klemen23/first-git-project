var express = require('express');
var app = expres();

exports.start = function(){
    
    
    app.get('/', function(req, res){
        
        res.send('hello world');
    });

    app.listen(3000, function(){
    
    console.log('Server running');
    
    });
    
};