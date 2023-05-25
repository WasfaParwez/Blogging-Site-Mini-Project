const authormodel = require('../model/authormodel');

const createmodel= async function(req,res){
    try{
    data= req.body
    createdata=await createmodel.create(data)
    res.send({msg:createdata})}
    catch(error){
        res.send({msg:error.message})
    }
}
const getAuthorData = async function (req, res) {
        try{
         const userData = await authormodel.find()
         if (!userData) return res.status(404).json({ msg: "userId doesn't exit" })
         res.status(200).send({msg:userData})
    
        }
catch(err){
    res.status(500).send({status :false, msg:err.message})
}

}      
module.exports.getAuthorData = getAuthorData
module.exports.createmodel = createmodel