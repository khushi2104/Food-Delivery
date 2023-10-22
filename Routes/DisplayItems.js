const express=require("express");
const router = express.Router();

router.post('/fooddata',(req,res)=>{
    try {
       
       // console.log(global.FoodData);
        res.send([global.FoodData,global.FoodCategory]);
    } catch (error) {
        console.error(error);
        res.send("Server error");
    }
})

module.exports= router;