const mongoose = require("mongoose");

const ShinobiSchema = mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        },
        rank:{
            type: String
        },
        jutsu:{
            type: String
        }
    }
)

module.exports = mongoose.model("ShinobiSchema",ShinobiSchema);