import React from 'react'
import Navbar from './container/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './container/Home';
import Services from './container/Services';
import Login from './container/Login';
import Register from './container/Register';

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
