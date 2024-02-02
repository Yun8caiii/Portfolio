import React from 'react'
import './Skills.css'
import WebsiteImg from '../../assets/websiteDevelopment.png'
import AppDev from '../../assets/appDevelopment.png'
import motherBoard from '../../assets/2dmotherboard.png'


function Skills() {
  return (
    <section id='Skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDescription'>I am a skilled and passionate software engineer with experience in creating visually appealing and user-friendly websites. I have a strong understanding in Computer design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as C++ </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebsiteImg} alt='Computer webdev' className='skillBarImg' />
                <div className='skillBarText'>
                  <h2>Website Developer</h2>
                  <p>This is a demo txt, write your own content here</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDev} alt='Phone iosdev' className='skillBarImg' />
                <div className='skillBarText'>
                  <h2>App Developer</h2>
                  <p>This is a demo txt, write your own content here</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={motherBoard} alt='Hardware dev' className='skillBarImg' />
                <div className='skillBarText'>
                  <h2>Hardware Design</h2>
                  <p>This is a demo txt, write your own content here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills