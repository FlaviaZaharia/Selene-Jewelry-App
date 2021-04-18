const Item=require('../models/Item');

/*exports.remove=async(req,res)=>{
     Item.findById(req.params.id)
    .then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));
  }*/

  exports.remove=async(req,res)=>{
      /*const {id}=req.body;*/
    Item.findById(req.params.id)
   .then(item=>item.remove().then(()=>res.json({success:true})))
   .catch(err=>res.status(404).json({success:false}));
 }