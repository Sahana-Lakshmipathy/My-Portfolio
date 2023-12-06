import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/sahana-lakshmipathy/"  >
      <FaLinkedin />
      </a>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/Sahana-Lakshmipathy" >
      <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocials