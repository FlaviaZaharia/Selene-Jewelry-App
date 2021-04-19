exports.find=async(req,res)=>{
Item.findById(req.params.id)
 .then(item=>{res.send(item)})
 .catch(err=>res.status(404).json({success:false}));
}