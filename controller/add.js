const Item=require('../models/Item');
const ErrorResponse=require('../utils/errorResponse')

//add items
exports.add=async(req,res,next)=>{
  const {name,category,material,price,quantity,image}=req.body;
  const newItem=await Item.create({
    name,category,material,price,quantity,image})
/*if(!name||!quantity||!price||!material||!category) {
  return next(new ErrorResponse("!Please type in all details!",400));
}
if(!Number.isInteger(price)) {
  return next(new ErrorResponse("!Please enter a number for the price! ",400));
}
if(!Number.isInteger(quantity)) {
  return next(new ErrorResponse("!Please enter a number for the quantity!",400));
}*/
newItem.save().then(item=>res.send(item)).catch(err=>next(err));

}

//upload photo
//const cloudinary=require("../utils/cloudinary")
/*exports.upload= async (req, res) => {
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
}*/

