//const AuthorModel= require("../model/authormodel")
const blogmodel = require("../model/blogmodel")


let createModel= async function(req,res){
    try{
    data= req.body
    createdata=await blogmodel.create(data)
    res.send({msg:createdata})}
    catch(error){
        res.send({msg:error.message})
    }
}
const getBlogData = async function (req, res) {
   //
   try { 
    const {authorId, category,subcategory} = req.query
    const userData = await blogmodel.find({isDeleted:false,isPublished:true})
    let filterBlogs = data.filter(blogs=>{
      if(blogs.authorId == authorId){
        return blogs
      }
      if(blogs.category == category){
        return blogs
      }

      if((blogs.tag).includes(tag)){
        return blogs
      }
      if((blogs.subcategory).includes(subcategory)){
        return blogs

      }
      if(filter.Blogs.length > 0){
        res.status(200).send({status:true, message:"blogs list",data:filterBlogs})
      }
      else{
        res.status(404).send({status:false, message:"No blog found"})
      }
    
    })



    if (!userData) return res.status(404).json({ msg: "userId doesn't exit" })
    res.status(200).json({ msg: userData })
  }
  catch(error){
    res.status(500).send({status:false, message: error.message})
  }
}

//module.exports.createauthor=createauthor
//module.exports.getAuthorData=getAuthorData
module.exports.getBlogData=getBlogData
module.exports.createModel=createModel