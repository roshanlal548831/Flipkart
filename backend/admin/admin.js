const User = require("../models/usersModels");
const userModes = require("../models/usersModels");
const bscytp = require("bcrypt")

const createAdminAccount = async() => {
      try {
        const existAdmin = await userModes.findOne({email:"admin@gmail.com"});
         if(
            existAdmin){
             console.log("admin addready exist")
         }else{
            const newAdmi = new userModes({
                name: "Admin",
                email: "admin@gmail.com",
                password: await bscytp.hash("admin",10),
                role : "admin"
             });
             await newAdmi.save();
             console.log("addmin account createted successs fully")
         }
      } catch (error) {
        
      }
};


module.exports = createAdminAccount