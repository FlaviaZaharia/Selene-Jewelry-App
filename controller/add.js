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

exports.add=async(req,res,next)=>{
  const {name,category,material,price,quantity}=req.body;
  const newItem=await Item.create({
    name,category,material,price,quantity})
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

