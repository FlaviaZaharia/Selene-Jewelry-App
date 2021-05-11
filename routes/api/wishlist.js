const express=require('express');
const router=express.Router();

const {add}=require('../../controller/wishlist');
router.route("/send").post(add);
module.exports=router;