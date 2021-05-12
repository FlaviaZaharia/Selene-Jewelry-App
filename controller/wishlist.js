const Wishlist=require('../models/Wishlist');
const ErrorResponse=require('../utils/errorResponse')

//add wishlists
exports.add=async(req,res,next)=>{
  const {userId,email,products}=req.body;
  const newList=await Wishlist.create({userId,email,products})
newList.save().then(item=>res.send(item)).catch(err=>next(err)); }

exports.update=async(req,res)=>{
  Wishlist.findByIdAndUpdate(req.params.id,req.body,{useFindandModify:false})
   .then(item=>{res.send(item)})
   .catch(err=>err.status(404).json({success:false}));
  }

exports.remove=async(req,res)=>{
  Wishlist.deleteMany({}).then(()=>res.json({success:true}))
 .catch(err=>res.status(404).json({success:false})); }

exports.display=async(req,res)=>{
  Wishlist.find()
   .then(item=>{res.send(item)})
   .catch(err=>err.status(404).json({success:false}));
  }