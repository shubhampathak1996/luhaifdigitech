import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'

function NidhiSoftware() {
  const [faq, setfaq] = useState('A')
  return (
    <div>
      <Header />
      <PageBanner title={'Nidhi Software'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="sec-heading">
                <h2>
                  Complete Online Solutions With All
                  <span>Nidhi Software Company Kit!</span>
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
                      <img src="/assets/images/nidhi_software.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="luhaif-content">
                      <p>
                        Luhaif Digitech is offering a Complete Loan & Financial
                        Management Nidhi Software Solution for Your Nidhi
                        Company Business. We provide fully integrated Nidhi
                        Software to categorize all your banking needs with
                        distinct log-in facilities to the members. Along with
                        that, we offer Fully integrated CRM to organize the
                        clients better with all statutory due dates and online
                        payment gateway facility.
                      </p>
                      <p>
                        A Nidhi Company is the company that is associated with
                        the non-banking Indian Finance sector and is recognized
                        under section 620A of the Companies Act, 2013. The
                        foremost business of a Nidhi Company is borrowing and
                        lending money only between their members. They are also
                        called Permanent Fund, Benefit Funds, Mutual Benefit
                        Funds and Mutual Benefit Company.
                      </p>
                      <h3>Our Nidhi Software Solution Services include:</h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" /> Best GST
                          Support
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" /> User Friendly
                          Design
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" /> Training
                          facility
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" /> Clear User
                          Interface
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" /> Best
                          Integration (Tally, Busy)
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" /> Robust & Secure
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
                    <h2>What is Nidhi Software?</h2>

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
                        Nidhi Software helps to manage Nidhi (a non-banking
                        financial company formed to borrow & lend money to its
                        members) & Mini banking company performance in a smooth
                        way along with online administration.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('B')}>
                    <h2>How is Nishi Software beneficial for my business?</h2>

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
                        It helps a business in its marketing and consumer
                        management activities by speeding up work and reduces
                        the hours needed to perform time-taking management and
                        organizational responsibilities, thereby reducing cost &
                        increasing profitability.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('C')}>
                    <h2>
                      Is there any post-development maintenance Nidhi Software
                      support?
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
                        Yes, we support all the designed software by tracking
                        bugs and fixing them. We also enhance features and
                        handle its developments.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('D')}>
                    <h2>
                      What inputs would be required from me before initiating
                      software development?
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
                        We would be needing your UI preferences like desired
                        style, colour gamut, shapes, etc. Also, after you have
                        shared your project specification & application
                        description, the designing could be initiated.
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

export default NidhiSoftware
