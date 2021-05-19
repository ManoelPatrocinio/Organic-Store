const mongoose = require('mongoose');

var ordeSchema = new mongoose.Schema({
    order: {type:String},
    total: {type:String}
});

mongoose.model('Order',ordeSchema);