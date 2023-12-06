import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a rel="noopener noreferrer" href="https://www.linkedin.com/in/sahana-lakshmipathy/" target="_blank" >
      <FaLinkedin />
      </a>
      <a rel="noopener noreferrer" href="https://github.com/Sahana-Lakshmipathy" target="_blank">
      <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocials