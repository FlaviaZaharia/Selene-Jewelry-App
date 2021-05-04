/*const express=require('express');
const router=express.Router();
const auth=require('../../middleware/auth');

const Item=require('../../models/Item');

//get
router.get('/',(req,res)=>{
    Item.find()
    .then(items=>res.json(items))
});

//post
router.post('/',(req,res)=>{
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
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then(item=>item.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));

  });

module.exports=router;*/


const express=require('express');
const router=express.Router();


const {add}=require('../../controller/add');
const {remove}=require('../../controller/delete');
const {find}=require('../../controller/find');
const {update}=require('../../controller/update');
const {retrieve}=require('../../controller/retrieve');
router.route("/add").post(add);
router.route("/delete/:id").delete(remove);
router.route("/find/:id").get(find);
router.route("/find/:id").put(update);
router.route("/retrieve").get(retrieve);

module.exports=router;