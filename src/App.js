import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./App.css"

import{BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Service from "./Components/Service"
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import Errorpage from './Components/Errorpage'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path= "/service" element={<Service/>}/>
      
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      
      <Route path = "*" element={<Errorpage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
