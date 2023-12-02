import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linkedin.com/in/sahana-lakshmipathy-3a8a92274" target="_blank">
      <FaLinkedin />
      </a>
      <a href="" target="_blank">
      <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocials