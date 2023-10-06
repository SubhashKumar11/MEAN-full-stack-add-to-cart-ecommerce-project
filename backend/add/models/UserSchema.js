const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id:{
        type: Number
    },
    price:{
        type: Number
    },
    name:{
        type: String
    },
    description:{
    type: String
    },
    imageUrl:{
        type:String
    }
});
const userModel = new mongoose.model("userModel",userSchema);
module.exports = userModel;