import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'

function SocialMediaMarketing() {
  const [faq, setfaq] = useState('A')
  return (
    <div>
      <Header />
      <PageBanner title={'Social Media Marketing'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="sec-heading">
                <h2>
                  The right decision for your marketing <span>strategy! </span>
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
                      <img src="/assets/images/socialmedia_marketing.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="luhaif-content">
                      <p>
                        Social Media Marketing is the procedure to go when you
                        want your business to thrive in today’s world of fierce
                        competition. Overall, there are billions of members on
                        platforms like Facebook and twitter, therefore it means
                        that a huge number of the entire human population is
                        using social networking sites. As an outcome of its
                        recognition, search engines have started to enhance the
                        gravity of social media platforms when it comes to
                        ranking a website.
                      </p>
                      <p>
                        In simple terms, Social media marketing is the use of
                        social media platforms to connect with your target
                        audience to build your brand, increase sales, and drive
                        website traffic. The procedure involves publishing great
                        content on your social media profiles, listening to and
                        engaging your followers, analysing your outcomes, and
                        running social media advertisements.
                      </p>
                      <h3>Our Social Media Marketing Services include:</h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Detailed Competitor Analysis
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Creation of Organic Engaging Social Media Campaigns
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Formation of Data Driven Paid Social Campaigns
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Monitoring and Tracking Social Campaigns
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Leading and Monitoring Social Reputation
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Setting up your efforts with Website Integration
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
                    <h2>
                      Why should I choose social media marketing for my
                      business?
                    </h2>

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
                        Whether you’re interested in brand awareness, sponsored
                        content, or a combination of both, social media
                        marketing is suitable for your business as the majority
                        of the world’s population now uses social media to avail
                        information.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('B')}>
                    <h2>What social media platforms should I use?</h2>

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
                        Facebook is a great platform to get started with, every
                        brand’s targeted audiences’ characteristics are unique
                        and it depends on where the audiences actually interact
                        and engage online & what are the business goals or
                        objectives & the nature of the products/services
                        involved.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('C')}>
                    <h2>How to get more followers?</h2>

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
                        You can drive engagement by delivering high-quality
                        content to the right people at the right time. Creative
                        and unique content that is engaging, searchable, easy to
                        read & actionable can certainly garner followers on a
                        large scale.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('D')}>
                    <h2>What should I post?</h2>

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
                        It entirely depends on what your business makes or
                        provides and what your demographic is. Each social media
                        platform is enticing in its own way, but it is extremely
                        essential to share appropriate content only for the
                        concerned audiences to maintain your professional
                        reputation.
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

export default SocialMediaMarketing
