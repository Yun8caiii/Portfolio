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
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
        <Link className='desktopMenuListItem'>Client</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt='' className='desktopMenuImg' />Contact Me</button>
    </nav>
  )
}

export default NavBar