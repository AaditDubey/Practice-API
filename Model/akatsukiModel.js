const mongoose = require("mongoose");

const akatsukiMembers =  mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    villageBetrayed:{
        type: String
    },
    Alive:{
        type: Boolean
    }
})

module.exports = mongoose.model("AkatsukiModel", akatsukiMembers);