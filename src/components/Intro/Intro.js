import React from 'react'
import './intro.css';
import bg from '../../assets/bg.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/suitcase.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I&apos;m <span className='introName'>Jacky</span> <br />Software Engineer</span>
            <p className='introPara'>I am a skilled front-end developer with experience in mobile <br />applications and visually appealing and user friendly websites</p>
            <Link>
                <button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button>
            </Link>

        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;