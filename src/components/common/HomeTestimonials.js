import React, { Component } from 'react'
import Slider from 'react-slick'

function HomeTestimonials() {
  const settings = {
    dots: false,
    nav: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section className="testimonial ptb-70 animate__animated animate__bounceInLeft animate__delay-10s">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="sec-headingg">
              <h2>CLIENT TESTIMONIAL</h2>
            </div>
            <Slider {...settings}>
              <div className="testimonial-content text-center mt-3">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/NBZEiKA5oEg"
                  title="YouTube video player"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="testimonial-content text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Ut commodo efficitur neque. Ut
                  diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                </p>
                <h3>SHUBHAM PATHAK</h3>
                <h5>LUHAIF DIGITECH</h5>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonials
