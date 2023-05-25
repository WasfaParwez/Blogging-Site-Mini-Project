const express = require('express');
const route = express.Router();
const authorcontroller= require("../controller/authorcontroller")
const deletecontroller = require("../controller/deletecontroller")

route.get("/myfirstapi",function(req, res){
    res.send("This is working")
})


route.post("/createauthor",authorcontroller.createauthor)

route.post("/createblog",authorcontroller.createBlog)

route.delete("/deleteuser/:blogId",deletecontroller.deleteuser)

route.delete("/deletequery",deletecontroller.deletequery)





module.exports = route;