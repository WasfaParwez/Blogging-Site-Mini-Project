const express = require('express');
const route = express.Router();
const controller = require('../controller2/controller')


//  this post api is for create author
route.post("/createauthor", controller.createauthor)

// this post api is for create blog
route.post('/createBlog', controller.createBlog)

// export route
module.exports = route;