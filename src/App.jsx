// importing the react module
import React from 'react'

// importing the different components
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
//import Portfolio from  './components/portfolio/Portfolio'
import Milestones from './components/milestones/Milestones'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav />
        <About/>
        <Experience />
        <Services />
       {/* <Portfolio /> */}
        <Milestones />
        <Contact />
        <Footer />

    </>
  )
}

export default App