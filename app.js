var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
var Weight = require('./models/weights');
mongoose.connect('mongodb://localhost/weights');
var db = mongoose.connection;



app.get('/', function(req,res){

    res.send('Hello');
    
});

app.get('/api/weights', function(req, res){

    Weight.getWeight(function(err, weights){

        if(err){
            throw err;
        }
        res.json(weights);

    });
});


app.post('/api/weights', function(req, res){
     var weight = req.body;
    Weight.addWeight(weight,function(err, weight){

        if(err){
            throw err;
        }
        res.json(weight);

    });
});




//query by id

app.get('/api/weights/:_id', function(req, res){

    Weight.getWeightById(req.params._id, function(err, weight){

        if(err){
            throw err;
        }
        res.json(weight);

    });
});

app.listen(3000);
console.log('running');