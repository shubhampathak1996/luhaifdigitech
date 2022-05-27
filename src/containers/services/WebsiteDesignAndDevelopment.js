import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'

function WebDesignAndDevelopment() {
  const [faq, setfaq] = useState('A')
  return (
    <div>
      <Header />
      <PageBanner title={'Web Design And Development'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="sec-heading">
                <h2>
                  Your brand takes control of its visual representation with
                  custom <span>web design!</span>
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
                      <img src="/assets/images/website_design&devlopment.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="luhaif-content">
                      <p>
                        Our website design and development services perform
                        around working in a way that every small component can
                        be lined up that goes into leading up an effective
                        website. Hence, all the marketing strategy functions
                        into directing the traffic to the respective website.
                        Our well-designed websites are served by social media,
                        blogs and news & media that is effective in targeting
                        and converting users with web application development
                        and therefore, provides a positive user experience or
                        UX.
                      </p>
                      <p>
                        Luhaif Digitech, as a web designing & development
                        company in India, ensures that your digital marketing
                        purposes work in sync with the designs that are
                        fabricated. We follow a detailed procedure that includes
                        getting to know the owner, his company, and overall, the
                        target audience.
                      </p>
                      <h3>
                        Our Website Design and Development Services include:
                      </h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Offering comprehensive Web Design services with
                          well-thought-out graphics & layouts.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Following an Agile Development Process, ensuring
                          client engagement at regular intervals, transparency
                          about the progress, and high-quality output.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Taking care of the details required for building an
                          Ecommerce website like product descriptions, ad. copy
                          and revenue tracking.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Understanding functionality and syntax of elements,
                          effects, and features provided by HTML 5, CSS 3, and
                          Javascript.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Enabling the client to website updated and compatible
                          in performance through website maintenance services.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Providing content that is helpful in enhancing SEO and
                          online visibility.
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
                    <h2>Do you redesign existing websites?</h2>

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
                        Yes. We redesign existing websites sensitively to make
                        sure your reasons for redesigning are valid. This
                        ensures that you get the appropriate return on
                        investment for your website project.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('B')}>
                    <h2>Will my websites work on smart phones & tablets?</h2>

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
                        Every website that we create is mobile responsive
                        because if your website is not on those small screens,
                        you risk losing a big chunk of your potential audience.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('C')}>
                    <h2>What size company should have its website created?</h2>

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
                        Today, it is recommended for all businesses to have a
                        company’s website at least, regardless of the size. We
                        create websites for all kinds, be it a small, growing or
                        a large organization.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('D')}>
                    <h2>
                      Do you help in website maintenance after it is launched?
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
                        Yes. We offer web support & maintenance & take
                        accountability for any shortcomings after the website is
                        launched & make sure the web user experience is
                        streamlined & rich.
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

export default WebDesignAndDevelopment
