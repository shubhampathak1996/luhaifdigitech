import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'

function CrmLead() {
  const [faq, setfaq] = useState('A')
  return (
    <div>
      <Header />
      <PageBanner title={'CRM & Lead Management Solutions'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="sec-heading">
                <h2>
                  Handle Business Sales With A Powerful{' '}
                  <span>Lead Management Software! </span>
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
                        Get quality leads with Luhaif Digitech’s Lead Management
                        System software. We help our clients in providing
                        efficient leads quickly and getting more business as
                        well as increased ROI. We offer them an effective lead
                        management software which is efficient in giving users
                        seamless alliance between marketing and sales. With our
                        Lead Management Software, the clients get complete
                        access to lead generation, tracking of sales and closure
                        of sales in an effective way.
                      </p>
                      <p>
                        Through the effective lead management software, we make
                        clients’ work streamlined and help them to focus and
                        concentrate on other crucial works and attend sales
                        calls. The complete lead processing procedure work
                        starting from lead capturing to analysis, assignment,
                        closure and reports are handled by a trained team.
                      </p>
                      <h3>Our CRM and Lead Management Services include:</h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Real Time Lead Management
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Follow-Ups and Call Back
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Assigning Leads
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Generating Monthly Reports
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Agent-wise Reports
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Client Management
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
                    <h2>Who can benefit from CRM solutions?</h2>

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
                        Any organizational unit can benefit from it from sales
                        and customer service to recruiting, marketing, and
                        business development. Storing all customer information
                        in one place, recording service issues, identifying
                        sales opportunities, managing marketing campaigns — are
                        just a few capabilities that <b>CRM features.</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('B')}>
                    <h2>How can my business benefit from CRM?</h2>

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
                        Using a CRM system can reduce business costs, improve
                        performance & quality of the product/service, &
                        increase- sales volume, customer numbers, & customer
                        loyalty.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('C')}>
                    <h2>
                      How will a lead management solution benefit my business?
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
                        Leads Management software allows you to essentially
                        track, maintain, and push leads through a pre-defined
                        process. Also, lead management & CRM solutions go
                        hand-in-hand as Lead Management Software/Sales Tracking
                        Software is necessary for business CRM implementation.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('D')}>
                    <h2>What happens when a lead is converted?</h2>

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
                        Having a lead converted is necessary. This conversion
                        splits the Lead into a Contact (person) and Account
                        (company), so that you can manage and keep track of
                        multiple contacts within a company & achieve your
                        business goals effectively & efficiently.
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

export default CrmLead
