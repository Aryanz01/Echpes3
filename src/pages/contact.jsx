import React from 'react'

const contact = () => {
  return <>
   <section className="contact-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 text-center">
            <h1 className=" text">Reach Out to Us</h1>
            <p className=' text fs-3'>We are only a step away from you</p>
        </div>
      </div>
    </div>
  </section>
  <div className="contact-wrapper-details p-5">
    <div className="container-xxl">
      <div className="row text-center align-items-center">
        
        <div className="col-lg-6 col-md-12">
            <div className="card p-5">
                <h2 className='footer-title mb-3'><b>Contact Us</b></h2>
                  <p className='mb-2'><b>Address:</b> Thapar Institute of Engineering and Technology</p>
                  <p className='mb-2'><b>Phone:</b>  <a className='footer-tel' href="Ph.No:- +91 9876543210">Call us at +91 9876543210</a></p>
                  <p className='mb-4'><b>Hours:</b>  From 8 a.m To 6 p.m</p>
            </div>
          </div>
      </div>
    </div>
  </div>
  </>;
}

export default contact