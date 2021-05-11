const express=require('express');
const router=express.Router();

const {add}=require('../../controller/order');
const {update,find,remove,display} =require('../../controller/order');
router.route("/update/:id").put(update);
router.route("/send").post(add);
router.route("/find").get(find);
router.route("/delete").delete(remove);
router.route("/get").get(display);
module.exports=router;