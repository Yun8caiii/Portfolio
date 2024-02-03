import React from 'react'
import CompanyPlaceholder from '../../assets/CompanyPlaceholder.png'
import './contact.css'
import githubIcon from '../../assets/github-mark.png'
import twitterIcon from '../../assets/twitter.png'
import facebookIcon from '../../assets/facebook-app-symbol.png'
import linkedinIcon from '../../assets/linkedin.png'

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Client</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={CompanyPlaceholder} alt='Client' className='clientImg' />
                <img src={CompanyPlaceholder} alt='Client' className='clientImg' />
                <img src={CompanyPlaceholder} alt='Client' className='clientImg' />
                <img src={CompanyPlaceholder} alt='Client' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm'> 
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='text' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                  <img src={githubIcon} alt='github' className='link' />
                  <img src={twitterIcon} alt='twitter' className='link' />
                  <img src={facebookIcon} alt='facebook' className='link' />
                  <img src={linkedinIcon} alt='linkedin' className='link' />
                </div>
                
            </form>
        </div>
    </section>
  );
}

export default Contact