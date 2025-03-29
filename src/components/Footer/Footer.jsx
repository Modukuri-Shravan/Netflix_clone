import React from 'react'
import './Footer.css'
import twitter from '../../assets/twitter_icon.png'
import youtube from '../../assets/youtube_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'
import language from '../../assets/language-svgrepo-com.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={youtube} alt="" />
                <img src={twitter} alt="" />
            </div>
            <p className='ques'>Questions? Call 000-800-919-1743</p>
            <ul>
                    <li>FAQ</li>
                    <li>Help Centre</li>
                    <li>Gift Cards</li>
                    <li>Media Center</li>
                    <li>Investor Relations</li>
                    <li>Jobs</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                    <li>Legal Notices</li>
                    <li>Cookie Preferences</li>
                    <li>Corporate Information</li>
                    <li>Contact Us</li>
                </ul>

                <select name="language" id="lan">
                    <option value="English"> English</option>
                    <option value="Hindi">हिंदी</option>
                </select>
                <p className='Net'>Netflix India</p>
        </div>
    )
}

export default Footer