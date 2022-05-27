import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'

function AllCaseStudies() {
  return (
    <div>
      <Header />
      <PageBanner title={'All Case Study'} />
      <section className="case-study ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link to={`/case-study/single`}>
                <div className="single-case-study">
                  <img src="https://luhaifdigitech.com/images/case-study/app-intro.png" />
                  <div className="case-study-content">
                    <h3>DERMAPURITYS</h3>
                    <h4>SERVICES: DIGITAL MARKETING, LEAD GENERATION</h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <a href>
                <div className="single-case-study">
                  <img src="https://luhaifdigitech.com/images/case-study/ngo.PNG" />
                  <div className="case-study-content">
                    <h3>DERMAPURITYS</h3>
                    <h4>SERVICES: DIGITAL MARKETING, LEAD GENERATION</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href>
                <div className="single-case-study">
                  <img src="https://luhaifdigitech.com/images/case-study/pgx.PNG" />
                  <div className="case-study-content">
                    <h3>DERMAPURITYS</h3>
                    <h4>SERVICES: DIGITAL MARKETING, LEAD GENERATION</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href>
                <div className="single-case-study">
                  <img src="https://luhaifdigitech.com/images/case-study/luhaif-d.PNG" />
                  <div className="case-study-content">
                    <h3>DERMAPURITYS</h3>
                    <h4>SERVICES: DIGITAL MARKETING, LEAD GENERATION</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href>
                <div className="single-case-study">
                  <img src="https://luhaifdigitech.com/images/case-study/app-intro.png" />
                  <div className="case-study-content">
                    <h3>DERMAPURITYS</h3>
                    <h4>SERVICES: DIGITAL MARKETING, LEAD GENERATION</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href>
                <div className="single-case-study">
                  <img src="https://luhaifdigitech.com/images/case-study/app-intro.png" />
                  <div className="case-study-content">
                    <h3>DERMAPURITYS</h3>
                    <h4>SERVICES: DIGITAL MARKETING, LEAD GENERATION</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AllCaseStudies
