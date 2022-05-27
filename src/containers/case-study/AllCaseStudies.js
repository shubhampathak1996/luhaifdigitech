import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/common/Footer'
import { BLOG, CASESTUDY } from '../../shared/models/casestudy'
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
            {CASESTUDY &&
              CASESTUDY.map((item) => {
                return (
                  <div className="col-md-4">
                    <a href={`${item.link}`} target="_blank" className="pdf-i">
                      <div className="single-case-study">
                        <img src={item.image} />
                        <div className="case-study-content">
                          <h3>{item.title}</h3>
                          <h4>{item.subtitle}</h4>
                        </div>
                        <div className="bg-pdf">
                          <div className="content-pdf">
                            <i class="fa fa-file-pdf-o"></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AllCaseStudies
