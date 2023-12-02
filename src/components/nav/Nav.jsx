import React from 'react'
import './Nav.css'
import { MdHomeFilled } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

// to change the active class from time to time- react hooks

import {useState} from 'react';

const Nav = () => {

  const[activeNav,setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active':''}><MdHomeFilled /> </a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><IoPersonCircle /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''} ><FaGraduationCap /> </a>
      <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''} > <PiProjectorScreenChartFill /></a>
      <a href='#milestones' onClick={()=> setActiveNav('#milestones')} className={activeNav === '#milestones' ? 'active':''}><FaTrophy /> </a> 
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><FaEnvelope /> </a>    
    </nav>
  )
}

export default Nav