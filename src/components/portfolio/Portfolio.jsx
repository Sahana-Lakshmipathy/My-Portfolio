import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Weather Predictor App',
    github: 'www.html.com',
    demo: 'www.example.com'
  },
  {
    id: 2,
    image: img2,
    title: 'Weather Predictor App',
    github: 'www.html.com',
    demo: 'www.example.com'
  },
  {
    id: 3,
    image: img3,
    title: 'Weather Predictor App',
    github: 'www.html.com',
    demo: 'www.example.com'
  },
  {
    id: 4,
    image: img4,
    title: 'Weather Predictor App',
    github: 'www.html.com',
    demo: 'www.example.com'
  },
  {
    id: 5,
    image: img5,
    title: 'Weather Predictor App',
    github: 'www.html.com',
    demo: 'www.example.com'
  },
  {
    id: 6,
    image: img6,
    title: 'Weather Predictor App',
    github: 'www.html.com',
    demo: 'www.example.com'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id}className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href='{github}' className='btn' target='_blank'>Github</a>
                  <a href='{demo}' className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio