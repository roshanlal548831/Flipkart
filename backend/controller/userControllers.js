const userModel = require("../models/usersModels");
const bcrypt = require("bcrypt")

const userRegister = async(req,res)=>{
          try {
            const email = req.body.email;
            const userData = req.body;

            const usereExist = await userModel.findOne({email:email})
            if(usereExist){
                return await res.status(400).json({message: "emall already exists"})
              };
                await userModel.create(userData)
                res.status(201).json({msg: "user Register success"})

          } catch (error) {
            res.status(400).send(error)
            console.log(error)
          }
      };

      const userLogin = async(req,res) =>{
          try {
            const password = req.body.password
            const email = req.body.email

            const isemail = await userModel.findOne({email:email});

             if(!isemail){
                res.status(404).json({
                    msg: "wrong email"
                })
             }
            const passwordmatch =await bcrypt.compare(password,isemail.password)
                    if(passwordmatch){
                     return   res.status(201).json({
                            msg: "user login success fully",
                            name: isemail.username
                        })
                    }else{
                        res.status(404).json({
                            msg: "wrong password"
                        })
                    }
          } catch{
            
          }
      }
      

      module.exports ={ userRegister,userLogin}
