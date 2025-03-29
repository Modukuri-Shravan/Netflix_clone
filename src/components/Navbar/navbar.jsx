import React from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile_img.png'
import bell from '../../assets/bell_icon.svg'
import caret from '../../assets/caret_icon.svg'
import search from '../../assets/search_icon.svg'
import './navbar.css'

const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" className='logo' />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & popular</li>
          <li>My list</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className='icon' />
        <p>Children</p>
        <img src={bell} alt="" className='icon' />
        <img src={profile} alt="" />
        <img src={caret} alt="" />
        <div style={{ display: 'none' }} className="dropdown">Signout of Netflix</div>
      </div>
    </div>
  )
}

export default navbar