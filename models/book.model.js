const mongoose=require('mongoose');

var bookSchema = new mongoose.Schema({
    bookName:{
        type:String
    },
    author:{
        type:String
    },
    summary:{
        type:String
    },
    publication:{
        type:String
    },
    genre:{
        type:String
    }

});

mongoose.model('book',bookSchema);