const express=require('express');
const router=express.Router();

const {add}=require('../../controller/order');
router.route("/send").post(add);
module.exports=router;