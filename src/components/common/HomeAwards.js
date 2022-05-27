import React, { Component } from 'react'
import Slider from 'react-slick'

function HomeAwards() {
  const Awards = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <section
      className="award ptb-80 pb-50 animate__animated animate__rubberBand animate__delay-5s"
      style={{ width: '100%' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Slider {...Awards}>
              <div className="award-img">
                <img src="assets/images/award.png" />
              </div>
              <div className="award-img">
                <img src="assets/images/award.png" />
              </div>

              <div className="award-img">
                <img src="assets/images/award.png" />
              </div>
            </Slider>
          </div>
          <div className="col-md-6">
            <div className="sec-heading">
              <h2>
                AWARDS & <span>RECOGNITION</span>
              </h2>
            </div>
            <h5 className="together">Together Everyone Achieves More!</h5>
            <div className="award-content">
              <p>
                Our success is down to the unerring endeavour of our employees
                across India, our focus on innovation, and our willingness to
                both shape and contribute to the ever-changing digital
                landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAwards
