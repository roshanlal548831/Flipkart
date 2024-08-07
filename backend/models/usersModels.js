const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
      username:{
        type: String,
        required:true
      },
      email:{
        type: String,
        required:[true,"Email Require "]
      },
     
      password:{
        type: String,
        required:[true,"password reuqire "]
      },
      role:{
        type: String,
        enum:["admin","customer"],
        default: "customer"
      }
});

userSchema.methods.usergenrateAuthToken = async function(){
   try {
    const user = this;
    const token = jwt.sign({
       _id: user._id.toString() ,
      email: user.email
      }, 'FlipkartThisIsAwesomeWbsiteAndVaryUserfull',{expiresIn:"1h"});
    await this.save()
    return token;
   } catch (error) {
    console.log("token errro",error)
   }
}

userSchema.pre("save", async function(next){
       const user = this;
       if(!this.isModified("password")){
          next()
       }else{
          try {
            const passwordHash = await bcrypt.hash(user.password,10)
            user.password = passwordHash
          } catch (error) {
            console.log(error)
          }
       }
})

const User = new mongoose.model("User",userSchema);

module.exports = User