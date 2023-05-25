const express = require('express');
const route = require('./route/route')
const app= express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use('/',route);


// i added my MongoDB 
mongoose.connect("mongodb+srv://tshivendra07:6sWDbb2xoYJ5IZ0N@cluster0.3dhywqg.mongodb.net/project-1-with-team?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(()=>console.log("you are now connected to MongoDB"))
.catch(err=> console.log(err))



app.listen(process.env.PORT||3000,function(){
    console.log('the app is running at port '+(process.env.PORT||3000));
});
