import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div className="container bg-dark text-white my-5" style={{height:"80vh",borderRadius:"10px"}}>
         <section className="row">
              <div className="col-md-6 pt-5 text-white" >
                 <h1 className='text-white'>Welcome to my first web app</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dolorum quam maxime, aliquid sint minima deserunt, molestiae ea autem praesentium vero ex expedita velit. Optio itaque numquam vero ullam praesentium quibusdam enim totam officiis autem, quia vitae dignissimos necessitatibus, officia soluta consequuntur! Deleniti, excepturi quia doloremque sed natus a commodi laudantium, illo rerum nesciunt saepe odio nisi, dolores laboriosam corrupti aliquid velit. Maiores sequi vero dolorum odio quis ex nesciunt eveniet id soluta possimus eos dolore porro libero maxime distinctio, repellendus accusantium quas nisi accusamus veritatis quisquam. Est cum sit esse voluptatum, tenetur corporis nemo! Eaque aperiam perferendis corporis labore!</p>
                 <div className="row my-2">
                    <div className="col-md-6 my-2">
                      <NavLink to="/login">
                      <button type='button' className='btn btn-info'>Login</button>
                      </NavLink>
                    </div>
                    <div className="col-md-6 my-2">
                    <NavLink to="/register">
                    <button type='button' className='btn btn-outline-info'>Sing up</button>
                     </NavLink>
                    </div>
                 </div>
              </div>
              <div className="col-md-6">
                 <img width={"100%"} height={"100%"} style={{borderRadius:"10px"}} src="https://thumbs.dreamstime.com/z/airport-registration-scene-illustration-flat-style-horizontal-319026378.jpg?ct=jpeg" alt="" />
              </div>
         </section>
         <div className="row bg-white text-dark text-center" style={{borderRadius: "10px"}}>
            <div className="col-md-3">
              <h3>50+</h3>
              <p>registered</p>
            </div>
            <div className="col-md-3">
            <h3>100.00+</h3>
            <p>Happy Client</p>
            </div>
            <div className="col-md-3">
            <h3>500+</h3>
            <p>Well known Developers</p>
            </div>
            <div className="col-md-3">
            <h3>27/7

            </h3>
            <p>service</p>
            </div>
          
         </div>
      </div>
    </>
  )
}

export default Home
