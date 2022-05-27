import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'

function DigitalMarketing() {
  const services = {
    dots: true,
    infinite: true,
    pauseOnHover: false,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    arrows: true,
    autoplay: true,

    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const [faq, setfaq] = useState('A')
  return (
    <div>
      <Header />
      <PageBanner title={'Digital Marketing'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="sec-heading">
                <h2>
                  Lift your <span>business </span> to new heights with our{' '}
                  <span>digital marketing services!</span>
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
                      <img src="/assets/images/digitalmarketing.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="luhaif-content">
                      <p>
                        A digital marketing strategy gives a company direction.
                        With a plan in place, you’ll have all the necessary
                        information that is effective in the growth of your
                        company consistently. Your goals are crucial, but they
                        can be difficult to achieve if you don’t have a
                        step-by-step plan to obey. Digital marketing campaigns
                        are the building blocks and actions within your digital
                        marketing strategy that initiate you toward a specific
                        end goal.
                      </p>
                      <p>
                        Recognize how digital marketing can go further doing its
                        day job effectively, and act as a powerful lever in this
                        new era of digital transformation. Encompassing digital
                        in your marketing function can act as a catalyst
                        internally, as your culture becomes more comfortable and
                        encouraged by the opportunities of digital
                        transformation.
                      </p>
                      <h3>Our Digital Marketing Services include:</h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Social Media Marketing
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Website Design & Development
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Influencer Marketing
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Lead Generation / Sales Campaigns
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Content Marketing
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" /> Search Engine
                          Optimization (SEO)
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
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="main-timeline">
              <div className="timeline">
                <a href="#" className="timeline-content">
                  <div className="timeline-icon">
                    <img src="/assets/images/data-analysis.png"></img>
                  </div>
                  <div className="content">
                    <Link to="">
                      <h3 className="title">Research And Strategic Planning</h3>
                    </Link>
                    <p className="description">
                      (Marketing Audit, Marketing Plan Development, Brand
                      Messaging & Development, Logo Design, Brand Guidelines)
                    </p>
                  </div>
                </a>
              </div>
              <div className="timeline">
                <a href="#" className="timeline-content">
                  <div className="timeline-icon">
                    <img src="/assets/images/coding.png"></img>
                  </div>
                  <div className="content tt">
                    <h3 className="title">Website Design and Development </h3>
                    <p className="description">
                      (SEO Friendly, Custom Design & Dashboard, Website
                      Maintenance)
                    </p>
                  </div>
                </a>
              </div>
              <div className="timeline">
                <a href="#" className="timeline-content">
                  {/* <span className="timeline-year">2017</span> */}
                  <div className="timeline-icon">
                    <img src="/assets/images/monitoring.png"></img>
                  </div>
                  <div className="content">
                    <h3 className="title">Social Media Marketing</h3>
                    <p className="description">
                      (Campaign Development, Content Creation and Marketing,
                      Creative Design, Influencer Marketing, Photography/Video
                      Production)
                    </p>
                  </div>
                </a>
              </div>
              <div className="timeline">
                <a href="#" className="timeline-content">
                  <div className="timeline-icon">
                    <img src="/assets/images/targeting.png"></img>
                  </div>
                  <div className="content">
                    <h3 className="title">Performance Marketing</h3>
                    <p className="description">
                      (Paid Search Advertising/Paid Social Advertising,
                      Programmatic Advertising, Landing Page Development, Lead
                      Nurturing Campaigns, Data Analytics Setup & Analysis)
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pointer ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h3>
                Everything you need to get the attention of your audience!
              </h3>
            </div>
          </div>
          <div className="row">
            <Slider {...services}>
              <div className="service-main-img">
                <img src="/assets/images/socialmedia.jpg" />
                <div className="service-main-content">
                  <h3>SOCIAL MEDIA MARKETING</h3>
                </div>
              </div>
              <div className="service-main-img">
                <img src="/assets/images/website.jpg" />
                <div className="service-main-content">
                  <h3>WEBSITE DESIGN & DEVELOPMENT</h3>
                </div>
              </div>
              <div className="service-main-img">
                <img src="/assets/images/website.jpg" />
                <div className="service-main-content">
                  <h3>WEBSITE DESIGN & DEVELOPMENT</h3>
                </div>
              </div>
              <div className="service-main-img">
                <img src="/assets/images/website.jpg" />
                <div className="service-main-content">
                  <h3>WEBSITE DESIGN & DEVELOPMENT</h3>
                </div>
              </div>
            </Slider>
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
                    <h2>How can digital marketing help my business?</h2>

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
                        If your audience is mostly spending time online, then
                        digital marketing will help you reach your target
                        audience online, generate massive leads and achieve
                        valuable conversions.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('B')}>
                    <h2>
                      What kind of digital marketing strategies could be used to
                      boost business?
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
                        To achieve business goals, strategies including SEO (to
                        rank higher in search engine results), content marketing
                        (to share valuable information of your brand via
                        engaging, actionable & valuable content), SEM (to
                        advertise your products & services by targeting user
                        searches) & UX (to understand user behaviour by user
                        experience testing for improving online user experience)
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('C')}>
                    <h2>What are digital marketing platforms?</h2>

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
                        To achieve business goals, strategies including SEO (to
                        rank higher in search engine results), content marketing
                        (to share valuable information of your brand via
                        engaging, actionable & valuable content), SEM (to
                        advertise your products & services by targeting user
                        searches) & UX (to understand user behaviour by user
                        experience testing for improving online user experience)
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('D')}>
                    <h2>What all digital marketing tools could be used?</h2>

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
                        The most popularly used digital marketing tools are
                        Google Analytics or Google Search Console. Google
                        Analytics helps in robust reporting and tracking while
                        Google Search Console is the direct line of
                        communication between your website and Google.
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

export default DigitalMarketing
