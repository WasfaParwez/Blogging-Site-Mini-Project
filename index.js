const express = require('express');
const route = require('./route/route')
const app= express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use('/',route);


mongoose.connect("mongodb+srv://faizalamin009:OVccEej9VTcXT4aI@cluster0.6u8jtg7.mongodb.net/faizal-100",{
    useNewUrlParser:true
})
.then(()=>console.log("you are now connected to MongoDB"))
.catch(err=> console.log(err))

app.listen(process.env.PORT||3000,function(){
    console.log('the app is running at port '+(process.env.PORT||3000));
});
