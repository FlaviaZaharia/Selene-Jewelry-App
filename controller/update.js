const ErrorResponse=require('../utils/errorResponse')
exports.update=async(req,res,next)=>{

    const {name,category,material,price,quantity,image}=req.body;
    if(quantity<=0||price<=0)
    return next(new ErrorResponse("Quantity and price mush be greater than 0",404));
    try{
    Item.findByIdAndUpdate(req.params.id,req.body,{useFindandModify:false})
     .then(item=>{res.send(item)})
     .catch(err=>next(err));
    }
catch(er){
    res.status(404).json({success:false,error:error.message})
}
    }