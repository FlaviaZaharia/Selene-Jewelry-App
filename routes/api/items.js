const express=require('express');
const router=express.Router();
const auth=require('../../middleware/auth');

const Item=require('../../models/Item');

//get
router.get('/',(req,res)=>{
    Item.find()
    .then(items=>res.json(items))
});

//post
router.post('/',auth,(req,res)=>{
    const newItem=new Item({
        name:req.body.name,
        category:req.body.category,
        material:req.body.material,
        price:req.body.price,
        quantity:req.body.quantity
    });

    newItem.save().then(item=>res.json(item));

});
//delete
router.delete('/:id',auth,(req,res)=>{
    Item.findById(req.params.id)
    .then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));

  });

module.exports=router;