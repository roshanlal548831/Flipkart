import React, { useState } from 'react';
import ".//css/Register.css";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import {toast} from  "react-toastify"



const Register = () => {
   const[user,setUser] = useState({
     username: "",
     email: "",
     password: "",
   });

const navigate = useNavigate();

// token
// const storeTokenInLs = useAuth()



const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
   
    setUser({
        ...user,
        [name]:value
    });
   
};

// handling the from

const handleSubmit = async(v)=>{
  v.preventDefault();
 
   try {
    const response = await axios.post("http://localhost:8000/api/user/register",user);
    const data = await response.data
    const token = await response.data.token;
    localStorage.setItem("name",response.data.name)
    localStorage.setItem("token",token)
  
    if(data){
      toast.success(data.msg)
     navigate("/")
    }
    setUser({
      username: "",
      email: "",
      password: "",
    })

   } catch (error) {
   const data = error.response.data.message;
   toast.error(data)
   }
   
}


  return (
    <>
    
       <div className="container-sm bg-dark my-5" style={{borderRadius:"10px"}}>
          <div className="row">
              <div className="col-md-6">
               <img src="image/register.png" width={"100%"} height={"100%"} alt="Regiter pic" />
              </div>
              
              <div className="col-md-6">
                <div className="contain">
              <form id="form" onSubmit={handleSubmit} className="form" >
        <h2>Hey bub, ya gotta register!</h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input value={user.username} onChange={handleInput} type="text" id="username" name='username' placeholder="Enter username" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input value={user.email} onChange={handleInput} type="email" name='email' id="email" placeholder="Enter email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input value={user.password} onChange={handleInput} type="password" name='password' id="password" placeholder="Enter password" />
        </div>
        
        <button type="submit">Register now.</button>
      </form>
      </div>
              </div>
          </div>
       </div>
    </>
  )
}

export default Register
