const Item = require('../models/Item')
const ErrorResponse=require('../utils/errorResponse')
exports.find=async(req,res,next)=>{
    Item.findById(req.params.id)
.then(item=>{res.send(item)})
.catch(err=>res.status(404).json({success:false}));
 }