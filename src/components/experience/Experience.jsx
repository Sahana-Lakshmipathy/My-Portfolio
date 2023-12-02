import React from 'react';
import './Experience.css';
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { PiSigmaThin } from "react-icons/pi";
import { FaChartBar } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__ds">
          <h3>Data Science</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>              
            </article>
            <article className='experience__details'>
              <FaDatabase className='experience__details-icon'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>              
            </article>
            <article className='experience__details'>
              <PiSigmaThin className='experience__details-icon' />
              <div>
              <h4>Statistics</h4>
              <small className='text-light'>Advanced</small>
              </div>              
            </article>
            <article className='experience__details'>
              <FaChartBar className='experience__details-icon'/>
              <div>
              <h4>Data Visualisation with R</h4>
              <small className='text-light'>Intermediate</small>
              </div>              
            </article>
          </div>
        </div>

        <div className="experience__ml">
          <h3>Machine Learning</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaPython className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>              
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>              
            </article>
            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>              
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <div>
              <h4>JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>              
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>              
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaPython className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <FaCode className='experience__details-icon' />
              <div>
              <h4>C</h4>
              <small className='text-light'>Intermediate</small>
              </div>              
            </article>
            <article className='experience__details'>
              <FaJava className='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Advanced</small>
              </div>              
            </article>
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>              
            </article>
            <article className='experience__details'>
              <SiMongodb />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Basic</small>
              </div>              
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience