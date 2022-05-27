import React from 'react'
import { Link } from 'react-router-dom'

function HomeEvents() {
  return (
    <section className="events ptb-70 animate__animated animate__bounceInRight animate__delay-9s">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="events-img-nor">
              <img src="assets/images/events.png" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="events-content">
              <h2>VIDEO PRODUCTION</h2>
              <p>
                We have expertise in creating custom videos for our clients like
                website videos, conference & seminar videos, promotional videos,
                fundraising videos & social media campaign videos. Video is a
                powerful tool through which your story can be communicated with
                the target audience. If done in a strategic format, video can be
                one of the strongest drivers of conversions.
              </p>
              <p></p>
              <div className="read-more">
                <Link to="/services/video-production">
                  <button className="btn btn-readmore">READ MORE</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeEvents
