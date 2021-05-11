const Wishlist=require('../models/Wishlist');
const ErrorResponse=require('../utils/errorResponse')

//add wishlists
exports.add=async(req,res,next)=>{
  const {userId,email,products}=req.body;
  const newList=await Wishlist.create({userId,email,products})
newList.save().then(item=>res.send(item)).catch(err=>next(err)); }