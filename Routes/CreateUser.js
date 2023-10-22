const express=require("express");
const router=express.Router();
const User=require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt=require("bcryptjs");

 router.post("/createuser", 
[body('email').isEmail(),

body('password','Incorrect password').isLength({ min: 2 })],
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt=await bcrypt.genSalt(10);
    let securePass=await bcrypt.hash(req.body.password,salt);
     try {
       await User.create({
            name:req.body.name,
            password:securePass,
            location:req.body.location,
            email:req.body.email
        })
        res.json({success:true})
    } catch (error) {
        console.log(error);
        res.json({success:false})
    }
})

//Login
router.post("/loginuser", 
[body('email').isEmail(),
],
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: "Provide valid email" });
    }

    let email=req.body.email;
     try {
        let userData=await User.findOne({email});
        if(!userData){
            return res.status(400).json({ errors: "Email not present can'nt login" });
        }

        if(req.body.password!== userData.password){
            return res.status(400).json({ errors: "Wrong password" });
        }
        res.json({success:true})
    } catch (error) {
        console.log(error);
        res.json({success:false})
    }
})
module.exports=router;