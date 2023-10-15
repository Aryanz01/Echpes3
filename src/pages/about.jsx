
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import video from '../assets/images/about/1.mp4'
import mobileImage from '../assets/images/mobileimage.jpg'
const about = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <>
    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
              <h1 className="text-white">#Know Us</h1>
              <p className='text-white fs-3'>Get to know us more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   

    <section className="about-app p-5">
      <h2 className='fs-1 text-center mb-4' >Download our <Link>App</Link></h2>
      <div className="col-12 p-5 col-md-8 mx-auto">
        {isMobile ? (
          
          <img src={mobileImage} alt="Mobile Image" className='w-100' />
        ) : (
          
          <video loop muted autoPlay src={video} className='w-100'></video>
        )}
      </div>
    </section>

    
  </>;
}

export default about