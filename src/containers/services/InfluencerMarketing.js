import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function InfluencerMarketing() {
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
      <PageBanner title={'Influencer Marketing'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="sec-heading">
                <h2>
                  If You've Got The Time, We've Got{' '}
                  <span>The Influencer!s </span>
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
                      <img src="/assets/images/socialmedia_marketingg.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="luhaif-content">
                      <p>
                        Influencer marketing is the best way to acquire the
                        trust of new audiences, enhance customer loyalty, & take
                        your brand awareness to new levels. The collaboration of
                        a brand with the influencers is effective in building a
                        trust about their services among the target audiences,
                        making it easier to enhance the brand’s credibility.
                      </p>
                      <p>
                        Our services are designed in a way to provide good
                        results and outperform traditional marketing, our team
                        has an expertise in designing and developing customized
                        influencer marketing strategies that are effective in
                        the growth of your company.
                      </p>
                      <h3>Our Influencer Marketing Services include:</h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Research of the Industry
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Campaign Strategy
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Pitching to the influencers
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Partner Negotiations
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
                <img src="/assets/images/influencerMarketing/Akshara.80c16051.png" />

              </div>
              <div className="service-main-img">
                <img src="/assets/images/influencerMarketing/Pallavi.3a379170.png" />

              </div>
              <div className="service-main-img">
                <img src="/assets/images/influencerMarketing/Preeti.e1450715.png" />

              </div>
              <div className="service-main-img">
                <img src="/assets/images/influencerMarketing/Simran.55a9a54e.png" />

              </div>
              <div className="service-main-img">
                <img src="/assets/images/influencerMarketing/Siddhi.747131e7.ac353d31.webp" />

              </div>
              <div className="service-main-img">
                <img src="/assets/images/influencerMarketing/Seema_Khan.65138aca.png" />

              </div>
              <div className="service-main-img">
                <img src="/assets/images/influencerMarketing/Sheena.2a349d99.3b47b146.webp" />

              </div>
              <div className="service-main-img">
                <img src="/assets/images/influencerMarketing/Shivangi.a1c0cfe9.37ec4983.webp" />

              </div>
              <div className="service-main-img">
                <img src="/assets/images/influencerMarketing/Umesh_Dutt.d01ccc28.png" />

              </div>
              <div className="service-main-img">
                <img src="/assets/images/influencerMarketing/Upalina_.bff4e90e.d8881556.webp" />

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
                    <h2>
                      Why should I choose influencer marketing for my business?
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
                        Influencer marketing will help your business build trust
                        quickly, improve brand awareness, enrich your content
                        strategy, & build winning partnerships all with a human
                        touch.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('B')}>
                    <h2>What is influencer marketing?</h2>

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
                        Influencer marketing uses influencers (key figures) to
                        amplify your brand’s message and increase sales of
                        products and services. Instead of marketing directly to
                        a large group of consumers, your strategy is to inspire,
                        hire, or pay influencers to spread the word who have a
                        large, engaged audience that your brand can tap into to
                        reach a wider audience.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('C')}>
                    <h2>How much should you pay influencers?</h2>

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
                        If you are dealing on a barter scale, then there should
                        be no additional charges. However, some factors like
                        Social platform influencer Following, Engagement &
                        Popularity are key to determining costs.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('D')}>
                    <h2>
                      Are celebrity endorsements the same as influencer
                      marketing?
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
                        No. Influencers have a smaller audience of people with
                        common and defined interests. Whereas celebrities have
                        larger audiences of people with mixed interests. In case
                        of predefined interests, influencer marketing is usually
                        recommended.
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

export default InfluencerMarketing
