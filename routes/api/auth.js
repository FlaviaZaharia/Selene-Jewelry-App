const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const config=require('config');
const jwt=require('jsonwebtoken');
const auth=require('../../middleware/auth');

const User=require('../../models/User');

//post
router.post('/',(req,res)=>{
    //res.send('register');
   const {email,password}=req.body;
    //simple validation
    if(!email||!password){
      return res.status(400).json({msg:'please eneter all fields'});
    }

    //check for existing user
    User.findOne({email:email})
    .then(user=>{
        if(!user) return res.status(400).json({msg:'user does not exist'});

        //validate password
        bcrypt.compare(password,user.password)
        .then(isMatch=>{
            if(!isMatch) return res.status(400).json({msg:'Invalid credentials'});
            jwt.sign(
                {id:user.id},
                config.get('jwtSecret'),
                {expiresIn:3600},//dureaza o ora tokenul
                (err,token)=>{
                    if(err) throw err;
                    res.json({
                        token,
                        user:{
                          id:user.id,
                          name:user.name,
                          email:user.email
                        }
                    });
                }
            )
        })
    })
});


router.get('/user',auth,(req,res)=>{
    User.findById(req.user.id).select('-password').
    then(user=>res.json(user));
});

module.exports=router;