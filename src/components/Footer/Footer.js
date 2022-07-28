import React from 'react'
import "./footer.css";
import logo from "../../Images/logo.svg";

export default function Footer() {
  return (
    <div className='footer-component'>
        <div className='footer-content-wrapper'>
        <div className='footer-logo-wrapper'>
            <div className='logo-footer'>
                <img src = {logo} alt = "error"/>
            </div>
            <div className='logo-footer-text'>
              <p className='logo-text-css'>LOGO TECHNOLOGIES</p>
            </div>
        </div>
        <div className='footer-text-content'>
          <div className='footer-text1'>
            <p className='text1-heading'>STAFF AUGMENTATION</p>
            <p className='text1-content'>Hire App Developers Hire Web Developers Hire Full Stack Developers Hire JS Developers</p>
          </div>
          <div className='footer-text2'>
          <p className='text2-heading'>WHO WE ARE</p>
            <p className='text2-content'>About Us Founder Testimonials CareersHIRING FAQ’s Contact Us</p>
          </div>
          <div className='footer-text3'>
          <p className='text3-heading'>DEDICATED HIRING</p>
            <p className='text3-content'>Looking for hire for long term or full-time assignment</p>
          </div>
        </div>
        </div>
        <div className='footer-bottom-text'></div>
    </div>
  )
}
