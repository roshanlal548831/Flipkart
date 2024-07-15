import React, { useState } from 'react';
import ".//css/login.css";
import { NavLink } from 'react-router-dom';






const Login = () => {
  const[user,setUser] = useState({
    email: "",
    password: ""
  })
   


  const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
   
    setUser({
        ...user,
        [name]:value
    });
  }

  const inputSubmit = async(v)=>{
    v.preventDefault();
    console.log(user)
  
  }

  return (
    <>
     <div className="container my-5">
         <div className="row">
              <div className="col-md-6">
                <img src="image/login.jpg" alt="" height={"100%"} width={"100%"} />
              </div>
              <div className="col-md-6">
                <div className="containers">
        <div className="signin-form">
            <h2>Login</h2>
            <form onSubmit={inputSubmit}>
                <div className="input-group">
                    <label htmlFor="username">email</label>
                    <input value={user.email} type="email" onChange={handleInput} id="username" name="email" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input value={user.password} type="password" onChange={handleInput} id="password" name="password" required/>
                </div>
                <button type="submit">Login</button>
                <NavLink to="/register">Register Now</NavLink>
            </form>
        </div>
        </div>
    </div>

         </div>
     </div>
    </>
  )
}

export default Login
