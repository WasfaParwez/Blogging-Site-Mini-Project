// DELETE /blogs/:blogId
// Check if the blogId exists( and is not deleted). If it does, mark it deleted and return an HTTP status 200 without any response body.
// If the blog document doesn't exist then return an HTTP status of 404 with a body like this
// DELETE /blogs?queryParams
// Delete blog documents by category, authorid, tag name, subcategory name, unpublished
// If the blog document doesn't exist then return an HTTP status of 404 with a body like 
//------------------------------------------------------------------------------------------------------

blogModel= require('../model/blogmodel')


const deleteuser= async function(req, res){
    try{
    const blog_Id=req.params.blogId
    const deleteblog= await blogModel.findOneAndUpdate({_id:blog_Id},{isDeleted:true},{new:true})
    if (!deleteblog){

        res.status(404).json({
            status: false,
            message: "The Blog does not exist"
          })
        }
        res.status(200).json({
            status: true,
            data: deleteblog
        })
    }
    catch(error){
        res.json({error:error.message});
    }
}

const deletequery= async function(req, res){

    try{
    const {authorId,tags,category,subcategory,isPublished}=req.query
    console.log(req.query.category)

    
    object={}
    if (authorId){
        object.authorId=authorId
    }
    if (tags){
        object.tags=tags
    }
    if (category){
        object.category=category// {catergory:req.query.catergory}
    }
    if (subcategory){
        object.subcategory=subcategory
    }
    if (isPublished){
        object.isPublished=isPublished
    }
    object.isDeleted=false

    console.log(object)
    const result = await blogModel.updateMany(object, { isDeleted: true, deletedAt: new Date() });
    if(result.matchedCount==0){
        res.status(404).json({
            status: false,
            message: "The Blog does not exist"
          })
        }
        res.status(200).json({
            status: true,
            data: result
        })
    }
    catch(error){
        res.json({error: error.message})
    }
        
    

}

module.exports.deleteuser=deleteuser;
module.exports.deletequery=deletequery;