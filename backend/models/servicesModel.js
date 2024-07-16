const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")


const serviceSchema = new mongoose.Schema({
      name:{
        type: String,
        required:true
      },
      image:{
        type: String,
        required:true
      },
     
      prices:{
        type: String,
        required:true
      },
      description:{
        type: String,
        required:true
      },
    
});




const User = new mongoose.model("Service",serviceSchema);

module.exports = User