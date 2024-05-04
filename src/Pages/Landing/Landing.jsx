import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Intro from '../../Components/Intro/Intro'
import Services from '../../Components/Services/Services'
import Skill from '../../Components/Skill/Skill'
import Experience from '../../Components/Experience/Experience'
import Protfolio from '../../Components/Protfolio/Protfolio'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Services/>
      <Skill/>
      <Experience/>
      <Protfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Landing
