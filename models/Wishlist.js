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
        type:[{
            product:{ type: String },
            name: { type: String },
            category: { type: String },
            material: { type: String },
            price: { type: Number },
            quantity: {type: Number},
            image: { type: String },
        }],
        required:true
    }
});
module.exports=Order=mongoose.model('wishlist',WishSchema);