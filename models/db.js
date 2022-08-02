const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/BookDB',{useNewUrlParser:true},
(err)=>{
    if(!err){
        console.log("MongoDB Connection Successful")
    }else{
        console.log("Error in DB Connection:" +err )
    }
});

require('./book.model');