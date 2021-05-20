const Item=require('../models/Item');
const ErrorResponse=require('../utils/errorResponse')

//add items
exports.add=async(req,res,next)=>{
  const {name,category,material,price,quantity,image}=req.body;
  if(quantity<=0||price<=0)
  return next(new ErrorResponse("Quantity and price must be greater than zero",401));
  try{
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
catch(e){
  res.status(401).json({success:false,error:error.message})
}
}



