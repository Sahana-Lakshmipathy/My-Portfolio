import React from 'react';
import ME from '../../assets/monitor.jpg'
import './About.css';
import { HiBadgeCheck } from "react-icons/hi";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt='about img'/>
          </div>


        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <HiBadgeCheck className='about__icon'/> 
              <h5>Effective Communicator</h5>
              <small>Have public speaking experience</small>
            </article>
            <article className='about__card'>
            <HiBadgeCheck className='about__icon'/> 
              <h5>Problem Solver</h5>
              <small>Bold to uptake new challenges and find solutions</small>
            </article>
            <article className='about__card'>
            <HiBadgeCheck className='about__icon'/> 
              <h5>Brainstorming & Collaborative Skills</h5>
              <small>Eager to collaborate and loves to have healthy discussions</small>
            </article>
          </div>
          <p>
          As an ambitious undergraduate with a passion for unraveling insights from data. Currently seeking internships in the field of data analysis, I bring a robust foundation in computer science fundamentals, coupled with a keen commitment to adaptability and continuous learning. What distinguishes me is my proactive approach to challenges. Thriving in dynamic environments, I'm eager to leverage my analytical skills to contribute meaningfully to real-world projects. Explore my portfolio to delve into my journey and discover how I can bring valuable perspectives to your organisation.
            
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>

      </div>


    </section>
    
  )
}

export default About