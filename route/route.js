const express = require('express');
const route = express.Router();
const blogcontroller= require("../controller/blogcontroller")
const authorcontroller= require("../controller/authorcontroller")

route.get("/myfirstapi",function(req, res){
    res.send("This is working")
})


route.post("/createblog",blogcontroller.createModel)
route.get("/getauthor",blogcontroller.getBlogData)

route.post("/createauthor", authorcontroller.createmodel)
route.get("/getAuthorData", authorcontroller.getAuthorData)



module.exports = route;
