var mongoose = require('mongoose');

//Schema
var wSchema =  new mongoose.Schema({

    weight :{
      type: Number
    } ,
    date :{
        type:Date
    }


});

var Weight = module.exports = mongoose.model('bodyweights',wSchema);

// get weight

module.exports.getWeight= function(callback, limit){

    Weight.find(callback).limit(limit);
}

//get by ID

module.exports.getWeightById= function(id, callback){

    Weight.findById(id, callback);
}


//add

module.exports.addWeight= function(weight, callback){

    Weight.create(weight,callback);
}




