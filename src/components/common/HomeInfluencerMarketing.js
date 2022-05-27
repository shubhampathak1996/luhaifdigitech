import React from 'react'
import { Link } from 'react-router-dom'


function HomeInfluencerMarketing() {
  return (
    <section className="influencer-marketing ptb-70 animate__animated animate__bounceInLeft animate__delay-8s">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="influencer-marketing-content">
              <h2>INFLUENCER MARKETING</h2>
              <p>
                Influencer marketing is the best way to acquire the trust of new
                audiences, enhance customer loyalty, & take your brand awareness
                to new levels. The collaboration of a brand with the influencers
                is effective in building a trust about their services among the
                target audiences, making it easier to enhance the brand’s
                credibility.
              </p>
              <p></p>
              <div className="read-more">
                <Link to="/services/influencer-marketing">
                  <button className="btn btn-readmore">READ MORE</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="influencer-marketing-img">
              <img src="assets/images/influencer-marketing.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInfluencerMarketing
