import React from 'react'
import './Services.css'
import { FaCircleCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I will be able to Offer</h5>
      <h2>As A Service</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Data Analytics</h3>
          </div>

          <ul className='service__list'>
            <li>
            <FaCircleCheck className='service__list-icon'/>
            <p>Clean and process datasets using excel, python or R.</p>
            </li>
            <li>
            
            <FaCircleCheck className='service__list-icon'/>
            <p>Create Data Visualisations using python or R. </p>
            </li> 
            <li>
            <FaCircleCheck className='service__list-icon'/>
            <p>Use statitics and probabilty for in depth analysis.</p>
            </li>
            <li>
            <FaCircleCheck className='service__list-icon'/>
            <p>Present the insights using a powerpoint.</p>
            </li>
          </ul>
        </article>
        
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
            <FaCircleCheck className='service__list-icon'/>
            <p>Create a responsive client side interface using HTML, CSS,Javascript and React. </p>
            </li>
            <li>
            <FaCircleCheck className='service__list-icon'/>
            <p>Has basic knowledge of express framework, REST API and springboot framework </p>
            </li> <li>
            <FaCircleCheck className='service__list-icon'/>
            <p>Create and validate forms and emails </p>
            </li> <li>
            <FaCircleCheck className='service__list-icon'/>
            <p>Basic knowledge of MongoDB </p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services