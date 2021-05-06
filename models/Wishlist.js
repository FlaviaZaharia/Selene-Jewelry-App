const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const WishSchema=new Schema({
    userId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    products:{
        type:Array,
        required:true
    }
});
module.exports=Order=mongoose.model('wishlist',WishSchema);