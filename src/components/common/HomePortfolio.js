import React from 'react'
import { Link } from 'react-router-dom'
import { PORTFOLIO } from '../../shared/models/portfolio'
import SinglePortfolioCard from './SinglePortfolioCard'

function HomePortfolio() {
  return (
    <section className="showcase ptb-80 animate__animated animate__rubberBand animate__delay-4s">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mx-auto">
            <div className="sec-heading">
              <h2>
                Creative <span>Showcase</span>
              </h2>
            </div>
          </div>
          {/* <div className="creative-button">
            <div className>
              <button className="btn btn-all">ALL</button>
            </div>
            <div className>
              <button className="btn btn-all">SOCIAL MEDIA</button>
            </div>
            <div className>
              <button className="btn btn-all">WEBSITE &amp; APP</button>
            </div>
            <div className>
              <button className="btn btn-all">SEO</button>
            </div>
          </div> */}
        </div>
        <div className="showcase-now">
          <div className="tz-gallery">
            <div className="row">
              {PORTFOLIO &&
                PORTFOLIO.map((item, index) => {
                  if (index < 6) {
                    return (
                      <div className="col-md-4">
                        <SinglePortfolioCard portfolio={item} />
                      </div>
                    )
                  }
                })}
              <div class="contact-us-but text-center">
                <Link to="/our-portfolio" class="btn btn-contact-us">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePortfolio
