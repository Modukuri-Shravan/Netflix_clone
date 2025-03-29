import React from 'react'
import Navbar from '../../Navbar/navbar'
import banner from '../../../assets/hero_banner.jpg'
import hero_title from '../../../assets/hero_title.png'
import './home.css'
import play_icon from '../../../assets/play_icon.png'
import info_icon from '../../../assets/info_icon.png'
import TitleCards from '../../TitleCards/TitleCards'
import Footer from'../../Footer/Footer.jsx'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={banner} alt="" className='banner' />
        <div className="hero-captions">
          <img src={hero_title} alt="hero-title" className='hero_title' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta explicabo quis distinctio ratione dolor maiores repellendus. Aut minima earum laboriosam dicta repellendus hic!.</p>
          <div className="hero-btns">
            <button className='btns'
            >
              <img src={play_icon} alt="" />Play
            </button>
            <button className='btns dark'>
              <img src={info_icon} alt="" />More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={<h2>Blockbuster Movies</h2>} />
        <TitleCards title={<h2>Only on Netflix</h2>} />
        <TitleCards title={<h2>Upcoming</h2>} />
        <TitleCards title={<h2>Top pics for you</h2>} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home