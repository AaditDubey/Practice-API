const express = require("express")
const router = express.Router()
const Shinobis = require("../Model/shinobiModel")

router.get("/", async(req,res) =>{
    try{
        const allShinobis = await Shinobis.find()
        res.send(allShinobis)
    }
    catch(error){
        res.status(400)
        console.error(error);
    }
})

router.get("/:name", async(req,res) =>{
    try{
        const matchingShinobis = await Shinobis.find({firstName : {$ne : req.params.name}} , {_id: 0 , __v :0}).sort({firstName : 1});
        res.send(matchingShinobis)
        console.log(req.params)
    }
    catch(err){
        res.status(400)
        console.error(err);
    }

})
router.post("/" , async (req,res) =>{
    const newShinobi = new Shinobis({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        rank: req.body.rank,
        jutsu: req.body.jutsu
    })

    try {
        const ns = await newShinobi.save()
        res.json(ns);
    } catch (error) {
        res.status(400).send("bkl");
        console.log("mkl")
    }
})
module.exports = router;