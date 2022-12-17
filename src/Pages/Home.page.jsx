import React from 'react'

import Client from '../Component/Client'
import Hero from '../Component/Hero'
import Services from '../Component/Services/Services'
import Team from '../Component/Team'
import About from '../Component/About/AboutUs'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services /> 
      <About/>
      <Client/>
      <Team/>
    </div>
  )
}

export default Home
