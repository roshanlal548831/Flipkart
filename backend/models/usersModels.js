require("dotenv").config()
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
      username:{
        type: String,
        require:true
      },
      email:{
        type: String,
        require:true
      },
     
      password:{
        type: String,
        require:true
      },
    
});

// userSchema.methods.getAuthtoken = async function(){
//       try {
//         const secratekey = await process.env.JWT_SECRATE_KEY
//         const token = jwt.sign({
//             userId:this._id.toString(),
//             isAdmin:this.isAdmin,
//             email: this.email
//         },secratekey,{
//             expiresIn: "30d"
//         })
//         // console.log(token)
//         return token
//       } catch (error) {
//         console.log("the error => ", error)
        
//       }
// }

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