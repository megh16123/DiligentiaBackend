// Imports 
const express = require('express');
const dotenv = require('dotenv');
const  path  = require('path');
const exphbs  = require('express-handlebars');


//Setup
dotenv.config();
const port = process.env.PORT;
const app = express();
// Engine Handling
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Resources

// Setting up the router 

// app.use('/techwiz',require('./router'));
app.get('/',(req,res)=>{
    app.use(express.static(path.join(__dirname,"static")))
    res.render('home');
})
app.get('/techwhiz',(req,res)=>{
    // app.use(express.static(path.join(__dirname, './tester/build')));
    // app.use(express.static(path.join(__dirname, './tester/public')));
    // res.sendFile(path.join(__dirname,'./tester/build/index.html'));

})



// Starting the server 
app.listen(port,(req,res)=>{
    console.log(`app listening at port ${port}`)
})
