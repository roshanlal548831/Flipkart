const userModel = require("../models/usersModels");
const bcrypt = require("bcrypt")

const userRegister = async(req,res)=>{
          try {
            const email = req.body.email;
            const userData = req.body;

            const usereExist = await userModel.findOne({email:email});
            
            if(usereExist){
                return await res.status(400).json({message: "emall already exists"})
              };
              const usersData =  await userModel.create(userData)

              const token = await usersData.usergenrateAuthToken();
            

             

                res.status(201).json({
                  msg: "user Register success",
                  username:usersData.username,
                  email:usersData.emaul,
                  role:usersData.role,
                  token: token
                })

          } catch (error) {
            res.status(400).json(error)
            console.log(error)
          }
      };

      const userLogin = async(req,res) =>{
          try {
            const password = req.body.password
            const email = req.body.email

            const isemail = await userModel.findOne({email:email});
            if(!isemail){
              res.status(400).json({ msg: "wrong email" })
           }
            const token = await isemail.usergenrateAuthToken()
          
            console.log("this token",token)

          
            const passwordmatch = await bcrypt.compare(password,isemail.password)
                    if(passwordmatch){
                           res.status(201).json({
                            msg: "user login success fully",
                            name: isemail.username,
                            token: token
                        })
                    }else{
                      res.status(401).json({msg: "wrong password"})

                    }
          } catch{
            
          }
      }
      

      module.exports ={ userRegister,userLogin}
