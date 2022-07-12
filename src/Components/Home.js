import React from 'react'
import web from "../Components/images/success.jpg"
import { Link } from 'react-router-dom'
import Common from './Common'

const Home = () => {
  return (
    <>
      <Common name="Grow Your Business With" imgsrc={web} visit="/service" btname="Get Started"/>
    </>

)
}

export default Home
      
