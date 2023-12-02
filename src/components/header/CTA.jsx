import React from 'react'
import CV from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className="CTA">
    <a href={CV} download className='btn'>Download Resume</a>
    <a href="#contact" className='btn btn-primary'>Message Me</a>
    </div>
  )
}

export default CTA