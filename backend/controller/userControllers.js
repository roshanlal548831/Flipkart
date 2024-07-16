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
              res.cookie("jwt",token)

              console.log("this token",token)

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
            const token = await isemail.usergenrateAuthToken()
            res.cookie("jwt",token,{
              expires: new Date(Date.now()+500000),
              httpOnly:true
          })
            console.log("this token",token)

             if(!isemail){
                res.status(400).json({ msg: "wrong email" })
             }
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
