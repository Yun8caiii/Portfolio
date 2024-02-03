import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/conversation.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-500} duration={500} className='desktopMenuListItem'>Client</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' />Contact Me</button>
    </nav>
  )
}

export default NavBar