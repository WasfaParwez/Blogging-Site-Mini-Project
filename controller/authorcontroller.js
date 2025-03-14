const authormodel = require('../model/authormodel')
const blogmodel = require('../model/blogmodel')


// this is for create Authors
const createauthor = async (req, res) =>{
    try {
        let authorData = req.body
        let data = await authormodel.create(authorData)
        return res.status(201).send({
            status : true,
            data
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



// this is for create blog with Author ID
const createBlog = async (req, res) =>{
    try {
        let blogData = req.body;
        if(!blogData.authorId){
            return res.status(404).send('authorId is missing')
        }else{
            let findauthorid = await authormodel.findById({_id : blogData.authorId})
            if(!findauthorid){
                return res.status(404).send('Author id not Valid')
            }else{
                let data = await blogmodel.create(blogData)
                return res.status(201).send({
                    status : true,
                    data
                })
            }
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {createauthor, createBlog}