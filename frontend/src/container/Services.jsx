import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Services = () => {
    
  const[data,setData] = useState([]);

  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  const services = async () =>{
    if(token){
      const servicesData = await axios.get("http://localhost:8000/api/user/service");
      setData(servicesData.data.data)
    }else{
       navigate("/")
    }
  }
   
  useEffect(()=>{
      services()
  })

 
  return (
    <>
   
      <div className="container">
         <div className="row">
             
                  {
                    data.map((item,i) => {
                      return (
                         <div key={i} className="card col-md-4 m-2" style={{width: "18rem"}}>
                           <img src={item.image} className="card-img-top" alt="..." height={"200px"}/>
                           <div className="card-body">
                             <h4 className="card-title">{item.name}</h4>
                             <h6 className="card-title"> Prices: {item.prices} ₹</h6>
                             <p className="card-title">{item.description}</p>
                           </div>
                         </div>
                      )
                    })
                  }
             
                
         </div>
    </div>
     
    </>
  )
}

export default Services
