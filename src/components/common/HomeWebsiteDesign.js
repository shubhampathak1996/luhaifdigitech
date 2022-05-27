import React from 'react'
import { Link } from 'react-router-dom'


function HomeWebsiteDesign() {
  return (
    <section className="website-design ptb-70 animate__animated animate__bounceInRight animate__delay-7s">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="website-design-img">
              <img src="assets/images/website-design.png" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="website-design-content">
              <h2>WEBSITE DESIGN & DEVELOPMENT</h2>
              <p>
                <strong>Luhaif Digitech’s</strong> website design and
                development services function around working in a way to line up
                every small component that goes into bringing up an effective
                website. So, all the marketing supports functions towards
                directing the traffic to the website. With the advancement in
                website designing and development technology in all these years,
                being the best Website Designing and Development Company in
                Delhi we have digital marketing tools than ever before.
              </p>
              <p></p>
              <div className="read-more">
                <Link to="/services/website-design-and-development">
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

export default HomeWebsiteDesign
