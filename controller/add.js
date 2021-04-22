const Item=require('../models/Item');
const ErrorResponse=require('../utils/errorResponse')
//create poduct
/*exports.add=async (req,res,next)=>{
    const {name,category,material,price,quantity}=req.body;
    try{
    const item=await Item.create({
    name,category,material,price,quantity
})
    }catch(error){
      next(error);
    }
};*/


/*exports.add=(req,res)=>{
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty"});
    return;
  }
  
  const newItem=new Item({
    name:req.body.name,
    category:req.body.category,
    material:req.body.material,
    price:req.body.price,
    quantity:req.body.quantity
});

newItem.save().then(item=>res.send(item)).catch(err=>{
  res.status(500).send({message:err.message||"Some error occured during the process"})
});

}*/
//add items
exports.add=async(req,res,next)=>{
  const {name,category,material,price,quantity}=req.body;
  const newItem=await Item.create({
    name,category,material,price,quantity})

newItem.save().then(item=>res.send(item)).catch(err=>next(err));

}

//upload photo
const cloudinary=require("../utils/cloudinary")
exports.upload= async (req, res) => {
  try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr);
      //const imageUrl=uploadResponse.secure_url;
      console.log(uploadResponse.secure_url);
      res.json({ msg: 'yaya' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
  }
}

