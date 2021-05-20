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
    cardNr:{
        type:String,
        required:false
    },
    shipping:{
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
            qty: {type: Number}
        }],
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    transport:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }
});
module.exports=Order=mongoose.model('order',OrderSchema);