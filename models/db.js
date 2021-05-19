const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerceOrders',{useNewUrlParser:true},(e)=>{
  
    if(!e){
        console.log('MongoDB connected');
    }else{
        console.log('erro on DB:'+e);
    }
});

require('./order.model');
