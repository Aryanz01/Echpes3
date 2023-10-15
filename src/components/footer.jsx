/* eslint-disable no-unused-vars */
import React from 'react'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsSlack, BsGithub } from 'react-icons/bs'
import playstore from '../assets/images/pay/play.jpg'
import appstore from '../assets/images/pay/app.jpg'
import visa from '../assets/images/pay/pay.png'

const footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className="container-xxl">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
          <h2 className='footer-title mb-3'><b>Contact</b></h2>
          <div className='mb-3'><p><b>Address:</b>  Thapar Institute of Engineering and Technology</p> </div>
          <div className='mb-3'><p><b>Phone:</b>  <a className='footer-tel' href="tel:+1234567890">Call us at +91 9876543210</a></p> </div>
          <div className='mb-4'><p><b>Hours:</b>  From 8 a.m To 6 p.m</p> </div>
          <div className='mb-3'><p><b>Follow the developer</b></p> </div>
          <div className="socials d-flex gap-3">
          <Link to={'https://github.com/Aryanz01/shopping-website'} className='gap-3' id='footer-link'>
          <BsGithub />
          </Link>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>About</b></h2>
          <div className='mb-3'> About Us  </div>
          <div className='mb-3'> Delivery  </div>
          <div className='mb-3'> Terms & Conditions  </div>
        </div>
        
        <div className="col-md-4 col-lg-4">
          <h2 className='footer-title mb-3'><b>Install App</b></h2>
          <p className='mb-3'>Available On Google Play Services & App Store</p>
          <div className="className='mb-3 col-md-6 col-12 pay">
          <div className='mb-3'>
          
          <img src={playstore} alt="" />
          
          </div>
          <div className='mb-3'>
          
          <img src={appstore} alt="" />
        
          </div>
          </div>
          
          
          
          
        </div>
      </div>
      <hr className='my-4' />
      <div className="row">
        
        
      </div>
    </div>
  </footer>
  </>;
}

export default footer