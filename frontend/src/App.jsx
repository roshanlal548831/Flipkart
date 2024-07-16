import React from 'react'
import Navbar from './container/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './container/Home';
import Services from './container/Services';
import Login from './container/Login';
import Register from './container/Register';
import Admin from './container/Admin';
import Dashboad from './dashboad/Dashboad';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/login' element={<Login></Login>}/>
         <Route path='/register' element={<Register></Register>}/>
         <Route path='/dashboad' element={<Dashboad></Dashboad>}/>
         <Route path='/admin' element={<Admin/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
