const express = require("express");
const mongoose = require("mongoose");
const shinobiRouter = require("./routes/shinobis");
const akatsukiRouter = require("./routes/akatsuki");
const mongoDBUrl = "mongodb://localhost:27017/Shinobi";
const path = require('path');
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register")
const cors = require("cors");

const app = express();



mongoose.connect(mongoDBUrl, {useNewUrlParser: true , useUnifiedTopology: true});
const con = mongoose.connection
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
con.on('open', () => console.log("opened!!!"))

app.use(cors(corsOptions))
app.use(express.json())
app.use("/shinobis",shinobiRouter);
app.use("/akatsuki", akatsukiRouter);
app.use("/login",loginRouter);
app.use("/register",registerRouter);

app.listen(8080, () =>console.log("Sunn raha hu mai"))