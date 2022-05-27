import React from 'react'

function HomeAbout() {
  return (
    <section className="about">
      <div className="dot-image">
        <img src="assets/images/dot2.png" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="about-content animate__animated animate__rubberBand animate__delay-1s">
              <h1>Digitally transform your business</h1>
              <h3>
                Come million steps closer towards your dream business with
                ‘Luhaif Digitech’.
              </h3>
              <p>
                In today’s growing era of technology ‘Luhaif Digitech’ is a
                renowned name in the industry of digital marketing across the
                world.
              </p>
            </div>
          </div>
        </div>
        <div className="about-com animate__animated animate__rubberBand animate__delay-2s">
          <div className="row">
            <div className="col-md-2 mx-auto mx-auto col-sm-6">
              <div className="box">
                <div className="box-content">
                  <h3>8+</h3>
                  <h2>Years in Business</h2>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto col-sm-6">
              <div className="box">
                <div className="box-content">
                  <h3>450+</h3>
                  <h2>Happy Clients</h2>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="box">
                <div className="box-content">
                  <h3>700+</h3>
                  <h2>Projects Completed</h2>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="box">
                <div className="box-content">
                  <h3>24/7</h3>
                  <h2>Support Available</h2>
                </div>
              </div>
            </div>
            <div className="col-md-2 mx-auto">
              <div className="box">
                <div className="box-content">
                  <h3>95%</h3>
                  <h2>Campaign Success Rate</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
