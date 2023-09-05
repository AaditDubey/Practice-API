const express = require("express");
const router = express.Router();
const User = require("../Model/user");

router.use(express.urlencoded({extended: false}))

router.post("/", async(req,res) =>{
    const temp = await User.where("email").equals(req.body.email);
    console.log(temp)
    if(temp.length ==0 ){
        const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
        })
        try {
            await newUser.save();
            res.send(newUser)
        } catch (error) {
            res.status(error)
        }}
    else{
        res.send("email already exists")
    }
})

router.get("/" , async(req,res) =>{
    
    try{
        const users = await User.find();
        res.send(users)
    }
    catch(e){
        res.status(400)
        console.error(error);
    }
})


module.exports = router;