import React from 'react';
import './Milestones.css';
import avtr1 from '../../assets/Forage.jpg'
import avtr2 from '../../assets/leetcode.png'
import avtr3 from '../../assets/coursera.png'


// import Swiper core and required modules
import { Pagination,Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: avtr1,
    name: 'Completed Data Analytics Simulation',
    desc: "Completed Accenture North Americas's Data Analytics and Visualisation Job Simulation making myself career ready as a data analyst."
  },
  {
    avatar: avtr2,
    name: 'Completed 50 Leetcode Challenges',
    desc: 'Completed over 50 various chlleges in leetcode till date making myself interview ready and apply the principles of DSA and the count will keep increasing!'
  },
  {
    avatar: avtr3,
    name: 'Completed Google R certification',
    desc: "Completed the course the Google Data Analysis with R programming making myself industry ready to solve problems and apply statistical analysis using R."
  }
]



const Milestones = () => {
  return (
    <section id="milestones">
      <h5>Take a look at</h5>
      <h2>My Milestones</h2>

      <Swiper
        className="container milestones__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
      >
        {data.map(({ avatar, name, desc }, index) => (
          <SwiperSlide key={index} className='milestone'>
            <div className='milestone__avatar'>
              <img src={avatar} alt='' />
            </div>
            <h5 className='milestone__name'>{name}</h5>
            <small className='milestone__desc'>{desc}</small>
          </SwiperSlide>
        ))}
        
        {/* Add the pagination div here */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

      

export default Milestones;