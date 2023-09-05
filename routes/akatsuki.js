const express = require("express")
const router = express.Router()
const akatsukiMembers = require("../Model/akatsukiModel")

router.get("/" , async(req, res) =>{
    try{
        const allAkatsuki = await akatsukiMembers.find();
        res.json(allAkatsuki);
    }

    catch(err){
        res.send(err)
    }
})

router.post("/", async(req,res) =>{
    
})

module.exports = router;