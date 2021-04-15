const express=require('express');
const router=express.Router();
//nou
const {register,login}=require('../../controller/auth');
router.route("/register").post(register);
router.route("/login").post(login);


module.exports=router;