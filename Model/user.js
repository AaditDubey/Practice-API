const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.Schema({
    name:{
        type: String,
        require
    },
    email:{
        type: String,
        require
    },
    password:{
        type: String,
        require
    }
})

module.exports = mongoose.model("User", User)