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
app.use(express.static(path.join(__dirname,'static')))
app.use('/',require('./router'));




// Starting the server 
app.listen(port,(req,res)=>{
    console.log(`app listening at port ${port}`)
})

