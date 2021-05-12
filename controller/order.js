const Order=require('../models/Order');
const ErrorResponse=require('../utils/errorResponse')

//add orders
exports.add=async(req,res,next)=>{
  const {userId,email,name,number,address,city,country,payment,cardNr,shipping,products,total,transport,status}=req.body;
  const newOrder=await Order.create({userId,email,name,number,address,city,country,payment,cardNr,shipping,products,total,transport,status})
newOrder.save().then(item=>res.send(item)).catch(err=>next(err));

}

exports.update=async(req,res)=>{
  Order.findByIdAndUpdate(req.params.id,req.body,{useFindandModify:false})
   .then(item=>{res.send(item)})
   .catch(err=>err.status(404).json({success:false}));
  }

  //delete all orders
  exports.remove=async(req,res)=>{
  Order.deleteMany({}).then(()=>res.json({success:true}))
 .catch(err=>res.status(404).json({success:false}));
}
//get orders
exports.display=async(req,res)=>{
  Order.find()
   .then(item=>{res.send(item)})
   .catch(err=>err.status(404).json({success:false}));
  }