const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const OrderSchema=new Schema({
    userId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    payment:{
        type:String,
        required:true
    },
    shipping:{
       type:String,
       required:true
    },
    products:{
        type:Array,
        required:true
    }
});
module.exports=Order=mongoose.model('order',OrderSchema);