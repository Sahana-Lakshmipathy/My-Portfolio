import React from 'react'
import './Footer.css'
import { FaCubes } from "react-icons/fa";

const Footer = () => {
  return (

    <footer>
      <a href='#' className='footer__logo'>Sahana Lakshmipathy</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Exerience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#testimonials'>Tesimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a><FaCubes /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;Sahana Lakshmipathy <br/> All rights reserved.</small>
      </div>
    </footer>


  )
}

export default Footer