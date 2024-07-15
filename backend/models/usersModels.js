const bcrypt = require("bcrypt");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
      username:{
        type: String,
        required:true
      },
      email:{
        type: String,
        required:true
      },
     
      password:{
        type: String,
        required:true
      },
    
});


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