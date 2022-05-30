import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function NgoAndFundraisingCampaign() {
  const services = {
    dots: true,
    infinite: true,
    pauseOnHover: false,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    arrows: true,
    autoplay: true,
    adaptiveHeight: true,

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
      <PageBanner title={'NGO And Fundraising Campaign'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="sec-heading">
                <h2>
                  Complete Solution for all your{' '}
                  <span>Non-Profit Organization</span> Requirements!
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
                      <img src="/assets/images/ngo_fundraising_campaigns.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="luhaif-content">
                      <p>
                        Over the years we have worked with many small and large
                        charities organizations, we at Luhaif Digitech provide
                        digital strategy and web solutions for NGOs. We have a
                        clear idea of the needs of non-profit organizations
                        intimately because of our long relationships with
                        several successful social causes.
                      </p>
                      <p>
                        Building a powerful website for a non-profit
                        organization is effective in enhancing the online
                        presence of your organization which is helpful in
                        reaching supporters and beneficiaries (those who need
                        help). A well-designed NGO website is perfect for
                        enhancing communications and spreading your reach beyond
                        local advocates. For example, if someone wants to know
                        about your NGO, your mission, you can simply direct them
                        to your organization’s website.
                      </p>
                      <h3>Our NGO and Fundraising Services include:</h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Your NGO website is helpful for Fundraising and
                          building a powerful website is effective to enhance
                          your online presence.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          To generate funds online for your non-profit
                          organization, it’s crucial to spread the word to get
                          people to know & try it in the first place.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Developing a strong digital brand identity that helps
                          in leading a better brand recall & a strong brand
                          perception.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Designing and developing a digital strategy to inspire
                          and entertain a specific target market.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Acquiring more donors and building an upward curve for
                          brand awareness that eventually leads to fundraising.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Mass campaign and fundraising give professional
                          presentations developed with leading-edge media
                          technology, professional photography to inform donors,
                          staff, corporates, beneficiaries, and any interested
                          parties about your NGO.
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
          <div className='col-md-10 mx-auto'>
            <div className="sec-heading">
              <h2>
                360-DEGREE <span> DIGITAL MARKETING STRATEGY</span>

              </h2>
            </div>
          </div>
          <div className='row'>
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
                    <h2>How do I benefit from NGO fundraising campaigns?</h2>

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
                        Fundraising campaigns bring together data, platforms,
                        technology, media & devices to achieve objectives. Such
                        campaigns raise awareness, attract funds, build
                        long-term donor memberships, & improve online visibility
                        & credibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('B')}>
                    <h2>What do NGO fundraising campaigns consist of?</h2>

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
                        There are a lot of marketing strategies including event
                        marketing, Email marketing, social media marketing
                        (SMM), &/or content marketing (videos, reels & other
                        creatives) that could be deployed for fundraising
                        purposes.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('C')}>
                    <h2>
                      Is web designing & development also a part of fundraising
                      campaigns?
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
                        Yes. Your website directly impacts the reputation of
                        your brand & online presence. It's through web
                        responsiveness that a visitor coming to your page finds
                        a reason to support your causes and donate funds.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('D')}>
                    <h2>
                      What all online platforms could be used for conducting
                      fundraising campaigns?
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
                        Online platforms for conducting fundraising campaigns
                        are including but not limited to LinkedIn, Facebook,
                        Instagram, Twitter, YouTube & several crowdfunding
                        platforms.
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

export default NgoAndFundraisingCampaign
