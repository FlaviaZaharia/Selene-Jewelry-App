const express=require('express');
const router=express.Router();

const {add}=require('../../controller/wishlist');
const {update,remove,display} =require('../../controller/wishlist');
router.route("/send").post(add);
router.route("/update").post(update);
router.route("/delete/:id").delete(remove);
router.route("/get").get(display);
module.exports=router;