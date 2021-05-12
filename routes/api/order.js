const express=require('express');
const router=express.Router();

const {add}=require('../../controller/order');
const {update,remove,display} =require('../../controller/order');
router.route("/update/:id").put(update);
router.route("/send").post(add);
router.route("/delete").delete(remove);
router.route("/get").get(display);
module.exports=router;