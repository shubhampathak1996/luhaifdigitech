import React from 'react'
import { Link } from 'react-router-dom'


function HomeAdvertising() {
  return (
    <section className="advertising ptb-70 animate__animated animate__bounceInLeft animate__delay-6s">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="advertising-content">
              <h2>ADVERTISING AND MARKETING</h2>
              <p>
                We utilise an analytical framework creatively to optimise the
                performance! Whether you want to drive home a perception or
                dominate the path-to-purchase, there isn’t anything quite as
                powerful as digital advertising, if done in a better manner.
                With our technological and creative expertise we ensure that you
                reach your audiences effectively.
              </p>

              <div className="read-more">
              <Link to=" /services/digital-marketing">
              <button className="btn btn-readmore">READ MORE</button>
              </Link>    
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="advertising-img">
              <img src="assets/images/advertising.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAdvertising
