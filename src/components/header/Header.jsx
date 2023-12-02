import React from 'react'
import './Header.css';
import ME from '../../assets/me2.png'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey there, I'm</h5>
        <h1>Sahana Lakshmipathy</h1>
        <h5 className='text-light'>Emerging AI & DS Enthusiast & Full Stack Developer</h5>
        
        <CTA />

        <div className="me">
          <img src={ME} alt="" />
        </div>
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header