import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {
    
  const[data,setData] = useState([]);


  const services = async () =>{
    const servicesData = await axios.get("http://localhost:8000/api/user/service");
      setData(servicesData.data.data)
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
                             <h5 className="card-title">Card title</h5>
                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
