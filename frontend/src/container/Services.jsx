import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loder from './Loder';


const Services = () => {
    
  const[data,setData] = useState([]);
  const[loder,setLoder] = useState()

  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  const services = async () =>{
  try {
    if(token){
      const servicesData = await axios.get("https://fakestoreapi.com/products");
      setData(servicesData.data)
      // console.log(servicesData.data)
    }else{
       navigate("/")
    }
  } catch (error) {
   if(error){
    setLoder(error)
   }
  }
  }
   
  useEffect(()=>{
      services()
  },[])

 
  return (
    <>
     
    {
      loder? (<Loder/>):
      <div className="container">
         <div className="row">
                  {
                    data.map((item,i) => {
                      return (
                         <div key={i} className="card col-md-4 m-2" style={{width: "18rem"}}>
                           <img src={item.image} className="card-img-top" alt="..." height={"200px"}/>
                           <div className="card-body">
                             <h4 className="card-title">{item.title}</h4>
                            <div className="row">
                               <div className="col-md-6">
                               <h6 className="card-title"> Price: {item.price} ₹</h6>
                               </div>
                               <div className="col-md-6">
                               <h5 className="card-title"> Rating</h5>
                               <h6>Rate : {item.rating.rate}</h6>
                               <h6>Count : {item.rating.count}</h6>
                               </div>
                            </div>
                             <p className="card-title">{item.description}</p>
                           </div>
                         </div>
                      )
                    })
                  }
    
           
         </div>
    </div>
}
    </>
  )
}


export default Services
