require('./models/db');
var routes=require('./models/book.model');
const express=require('express');
const path=require('path');
const exphbs=require('express-handlebars');
const bodyparser=require('body-parser')

const bookController=require('./controllers/bookController')
var app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs.engine({extname:'hbs',defaultLayout:"mainLayout",layoutsDir:__dirname+'/views/layouts/'}));
app.set('view engine','hbs');

app.use('/book',bookController);

app.listen(3000,()=>{
    console.log("express server started at port:3000")
});