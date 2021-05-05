const Order=require('../models/Order');
const ErrorResponse=require('../utils/errorResponse')

//add orders
exports.add=async(req,res,next)=>{
  const {userId,email,name,number,address,city,country,payment,shipping,products}=req.body;
  const newOrder=await Order.create({userId,email,name,number,address,city,country,payment,shipping,products})
newOrder.save().then(item=>res.send(item)).catch(err=>next(err));

}