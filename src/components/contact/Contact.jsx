import React from 'react';
import './Contact.css';
import { MdAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tmhd0hi', 'template_x91cru2', form.current, 'tvhECXIyjeS56zPSY')
    e.target.reset()
      
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdAttachEmail className='contact__option-icon' />
            <h4>Email Me</h4>
            <h5>At my Gmail</h5>
            <a href="mailto:sahana.lp100@gmail.com?subject=Subject%20of%20the%20email&body=Hello%20there,%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20connecting." target="_blank">Send an email</a>
          </article>
          <article className="contact__option">
          <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Sahana Lakshmipathy</h5>
            <a href="https://wa.me/9003120797?text=Hello%20there,%20nice%20portfolio%20project!" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <FaLinkedin  className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Sahana Lakshmipathy</h5>
            <a href="www.linkedin.com/in/sahana-lakshmipathy" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='Username' placeholder='Enter your name' required/>
          <input type='email' name='email' placeholder='Enter your Email'
          required />
          <textarea name='message' rows='7' placeholder="Type your message" required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact