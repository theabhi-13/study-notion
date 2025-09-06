const mongoose = require("mongoose");

const tagsSchema =new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    descriotion:{
        type:String,
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
});

module.exports=mongoose.model("Tag",tagsSchema);