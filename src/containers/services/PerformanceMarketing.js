import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'

function PerformanceMarketing() {
  const [faq, setfaq] = useState('A')
  return (
    <div>
      <Header />
      <PageBanner title={'Performance Marketing'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="sec-heading">
                <h2>
                  <span>Advertise, analyze, and optimize</span> ! We do it all
                  for you!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <section className="about-page ptb-70">
              <div className="container">
                <div className="row pt-50">
                  <div className="col-md-6">
                    <div className="services-image">
                      <img src="/assets/images/social-media.jpg" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="luhaif-content">
                      <p>
                        Luhaif Digitech is a performance marketing agency that
                        is result-driven with focus on 100% measurable returns.
                        Our performance-based marketing plans will always be
                        delivering the results you pay for. The strategies that
                        are built around individual mediums don't usually have a
                        huge impact. Therefore, we use strategies in conjunction
                        for creating a more powerful and effective online
                        presence.
                      </p>
                      <p>
                        Our team of experts combines technology and
                        communication mediums to ideate, create and optimize
                        performance-centric campaigns that are effective in
                        reducing the risks involved and therefore, delivering
                        higher ROI. The size of your organization doesn’t
                        matter, we ensure that every penny spent on advertising
                        work and maximize your overall return on investment.
                      </p>
                      <h3>Our Performance Marketing Services include:</h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Native Advertising
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Search Engine Marketing
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Social Media Marketing
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Affiliate Marketing
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Display Advertising
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="pointer ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h3>
                We create a tailored market segment for our audience to help
                advertise products and services in order to engage new
                customers.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-main-img">
                <img src="/assets/images/social-media.jpg" />
                <div className="service-main-content">
                  <h3>SOCIAL MEDIA CAMPAIGNS</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-main-img">
                <img src="/assets/images/social-media.jpg" />
                <div className="service-main-content">
                  <h3>DEDICATED ACCOUNT MANAGER</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-main-img">
                <img src="/assets/images/social-media.jpg" />
                <div className="service-main-content">
                  <h3>MONTHLY SMM REPORTS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="sec-heading">
                <h2>
                  <span>Frequently</span> Asked Questions
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="faq-pt-50">
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('A')}>
                    <h2>What is performance marketing?</h2>

                    <i
                      className="fa fa-angle-down arrow"
                      style={{
                        transform:
                          faq === 'A' ? 'rotate(0deg)' : 'rotate(-90deg)',
                      }}
                    />
                  </div>
                  <div
                    className="contentt"
                    style={{ display: faq === 'A' ? 'block' : 'none' }}
                  >
                    <div className="service-info-summary">
                      <p>
                        It is a combination of paid advertising and brand
                        marketing, but only paid out once the completed desired
                        action takes place which can be an array of executed
                        results such as a completed lead, sale, booking or
                        download.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('B')}>
                    <h2>
                      How can performance marketing be beneficial to my
                      business?
                    </h2>

                    <i
                      className="fa fa-angle-down arrow"
                      style={{
                        transform:
                          faq === 'B' ? 'rotate(0deg)' : 'rotate(-90deg)',
                      }}
                    />
                  </div>
                  <div
                    className="contentt"
                    style={{ display: faq === 'B' ? 'block' : 'none' }}
                  >
                    <div className="service-info-summary">
                      <p>
                        You can get additional brand and product exposure at no
                        additional cost, with the great benefit of higher-
                        consumer engagements, conversion rates, average order
                        sizes & third-party endorsements, all leading to sales,
                        brand loyalty & increased buyer retention.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('C')}>
                    <h2>
                      What are some successful performance marketing strategies
                      that could be opted for?
                    </h2>

                    <i
                      className="fa fa-angle-down arrow"
                      style={{
                        transform:
                          faq === 'C' ? 'rotate(0deg)' : 'rotate(-90deg)',
                      }}
                    />
                  </div>
                  <div
                    className="contentt"
                    style={{ display: faq === 'C' ? 'block' : 'none' }}
                  >
                    <div className="service-info-summary">
                      <p>
                        A good landing page & offer, testing & measuring
                        different techniques & strategies, choosing traffic
                        sources that are reputable & tracking & monitoring as
                        much as possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('D')}>
                    <h2>
                      Is Performance & Affiliate Marketing the same thing?
                    </h2>

                    <i
                      className="fa fa-angle-down arrow"
                      style={{
                        transform:
                          faq === 'D' ? 'rotate(0deg)' : 'rotate(-90deg)',
                      }}
                    />
                  </div>
                  <div
                    className="contentt"
                    style={{ display: faq === 'D' ? 'block' : 'none' }}
                  >
                    <div className="service-info-summary">
                      <p>
                        For Performance Marketing, the advertiser or network
                        pays the affiliate only for the desired result: a
                        completed sale, lead, download or other targeted action.
                        While Affiliate Marketing is a type of performance-based
                        marketing, here a business rewards one or more
                        affiliates for each visitor or customer brought by the
                        affiliate's ‘own marketing efforts’.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PerformanceMarketing
