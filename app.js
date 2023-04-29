const dotenv =  require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());

dotenv.config({path:'./config.env'});


require('./db/conn');

const User = require('./model/userSchema');
app.use(require('./router/auth'));//we link the router file
const PORT = process.env.PORT;
//Middleware

//const middleware = (req,res, next) =>{
 //  console.log('Hi middleware');
 //  next();
//}







//app.get('/', (req, res) => {
//   res.send('Hello world from the server app.js');
 
//});

app.get('/contact', (req, res) => {
    res.send('Hello world from the server contact');
 });

 app.get('/about',(req, res) => {
    res.send('Hello world from the server about');
 });

 app.get('/signin', (req, res) => {
    res.send('Hello world from the server signin');
 });

 app.get('/signup', (req, res) => {
    res.send('Hello world from the server signup');
 });

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});
