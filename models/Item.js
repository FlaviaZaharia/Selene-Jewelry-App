const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ItemSchema=new Schema({
   name:{
       type:String,
       required:true
   },
   category:{
       type:String,
       required:true
   },
   material:{
       type:String,
       required:true
   },
   price:{
       type:Number,
       required:true
   },
   quantity:{
       type:Number,
       required:true
   }
});

module.exports=Item=mongoose.model('item',ItemSchema);