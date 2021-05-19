const { TokenExpiredError } = require('jsonwebtoken');
const Item=require('../models/Item');
const ErrorResponse=require('../utils/errorResponse')
exports.remove=async(req,res)=>{
     Item.findById(req.params.id)
    .then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));
  }

