import React from 'react'
import web from "../Components/images/about.jpeg"
import { Link } from 'react-router-dom'
import Common from './Common'

const About = () => {
  return (
    <>
      <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now"/>
      
    </>
  )
}

export default About

      
