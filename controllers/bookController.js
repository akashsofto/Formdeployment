const express=require('express');
const mongoose=require('mongoose');
var router=express.Router();
const Book=mongoose.model("book")

router.get('/',(req,res)=>{
    res.render('books/addOrEdit',{viewTitle:"Insert Book"});
});

router.post('/',(req,res)=>{
    console.log(req.body);
    if(req.body._id == '')
    insertRecord(req,res);
    else
    updateRecord(req,res);
})


function insertRecord(req,res){
    var book=new Book();
    book.bookName=req.body.bookName;
    book.author=req.body.author;
    book.summary=req.body.summary;
    book.publication=req.body.publication;
    book.genre=req.body.genre;
    book.save((err,book)=>{
     if(!err){
        res.redirect('book/list');
     }else{
        console.log("error in insertion..."+err);
     }
    })
}

router.get('/list',(req,res)=>{
   // res.json('from list');
    Book.find({}).lean().then(book=>{
        res.render('books/list',{
            list:book
        });
    })
})
  function updateRecord(req,res){
    Book.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,book)=>{
       if(!err){res.redirect('book/list')} else{
        console.log("error during update book:"+err);
       }
    })
  }


   
    router.get('/:id',(req,res)=>{
        Book.findById(req.params.id).lean().then(books=>{
                res.render("books/addOrEdit",{
                    viewTitle:"Update book",
                    book:books
                    
                })
            })
        });

        router.get('/delete/:id',(req,res)=>{
          Book.findByIdAndRemove(req.params.id,(err,books)=>{
            if(!err){
                res.redirect('/book/list')
            }else{
                console.log("errorn in deletion:"+err);
            }
          })
        })
    


module.exports=router;