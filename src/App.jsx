import Aos from 'aos'

import { useEffect } from 'react'

import Header from './Component/Header'
import TopBar from './Component/TopBar'
import Footer from "./Component/Footer"

import Home from './Pages/Home.page'
import About from './Pages/About.page'
import ServicesPage from './Pages/Services.page'
import PortfolioPage from './Pages/Portfolio.page'
import TeamPage from './Pages/Team.page'

import { Route, Routes } from 'react-router-dom'


function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
     <TopBar/>
     <Header/>
     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<ServicesPage/>} />
          <Route path='/portfolio' element={<PortfolioPage/>} />
          <Route path='/team' element={<TeamPage />}/>
        </Routes>
     <Footer />
    </>
  )
}

export default App
