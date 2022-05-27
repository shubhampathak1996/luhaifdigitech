import React from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'


function SocialMedia() {
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
  return (
    <div>
      <Header />
      <PageBanner title={'Social Media Optimization'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mx-auto">
              <div className="sec-heading">
                <h2>
                  Our <span>focus</span> is to <span>deliver </span>a one-stop
                  platform for all your needs
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi tempore ipsam, ex dolorum repellat veritatis,
                        soluta fugit quas, culpa reiciendis illo magnam maiores
                        pariatur explicabo ratione aperiam perspiciatis
                        recusandae neque.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi tempore ipsam, ex dolorum repellat veritatis,
                        soluta fugit quas, culpa reiciendis illo magnam maiores
                        pariatur explicabo ratione aperiam perspiciatis
                        recusandae neque.
                      </p>
                      <h3>Our Services include:</h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" /> Facebook
                          Marketing
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Instagram Marketing
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" /> Remarketing
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" /> Influencer
                          Marketing
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" /> Lead Generation
                          / Sales Campaigns
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Social Media Verification
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
              <div className="main-icon">
                <div className="main-holder">
                  <div className="icon">
                    <img src="/assets/images/creativity.png" />
                  </div>
                  <div className="design-content">
                    <h3>Design</h3>
                  </div>
                  <div className="design-para">
                    <p>
                      A design concept is the foundational key that gives a
                      design its depth, and drives conversion, thereby elevating
                      your brand. It serves as an Eye catching, elegant, and
                      persuasive element that separates your successful
                      marketing from everything else bombarding your prospective
                      customers in the digital space and enhancing your brand
                      presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="main-icon">
                <div className="main-holder">
                  <div className="icon">
                    <img src="/assets/images/search.png" />
                  </div>
                  <div className="design-content">
                    <h3>Social Media Strategy</h3>
                  </div>
                  <div className="design-para">
                    <p>
                      A design concept is the foundational key that gives a
                      design its depth, and drives conversion, thereby elevating
                      your brand. It serves as an Eye catching, elegant, and
                      persuasive element that separates your successful
                      marketing from everything else bombarding your prospective
                      customers in the digital space and enhancing your brand
                      presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="main-icon">
                <div className="main-holder">
                  <div className="icon">
                    <img src="/assets/images/crm.png" />
                  </div>
                  <div className="design-content">
                    <h3>Engagement</h3>
                  </div>
                  <div className="design-para">
                    <p>
                      A design concept is the foundational key that gives a
                      design its depth, and drives conversion, thereby elevating
                      your brand. It serves as an Eye catching, elegant, and
                      persuasive element that separates your successful
                      marketing from everything else bombarding your prospective
                      customers in the digital space and enhancing your brand
                      presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ideation">
        <div className="container">
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
                    <div className="ideation-content">
                      <div className="ideation-sec-heading">
                        <h2>Ideation</h2>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi tempore ipsam, ex dolorum repellat veritatis,
                        soluta fugit quas, culpa reiciendis illo magnam maiores
                        pariatur Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Modi tempore ipsam, ex dolorum
                        repellat veritatis, soluta fugit quas, culpa reiciendis
                        illo magnam maiores pariatur Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nunc vulputate libero et
                        velit interdum, ac aliquet odio mattis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Curabitur tempus urna at turpis
                        condimentum lobortis.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nunc vulputate libero et
                        velit interdum, ac aliquet odio mattis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="ideation">
        <div className="container">
          <div className="row">
            <section className="about-page ptb-70">
              <div className="container">
                <div className="row pt-50">
                  <div className="col-md-6">
                    <div className="ideation-content">
                      <div className="ideation-sec-heading">
                        <h2>
                          Social Media <span>Marketing</span>
                        </h2>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi tempore ipsam, ex dolorum repellat veritatis,
                        soluta fugit quas, culpa reiciendis illo magnam maiores
                        pariatur Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Modi tempore ipsam, ex dolorum
                        repellat veritatis, soluta fugit quas, culpa reiciendis
                        illo magnam maiores pariatur Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nunc vulputate libero et
                        velit interdum, ac aliquet odio mattis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Curabitur tempus urna at turpis
                        condimentum lobortis.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nunc vulputate libero et
                        velit interdum, ac aliquet odio mattis. Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="services-image">
                      <img src="/assets/images/smm3.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
                  <div className="head">
                    <h2>
                      How will social media marketing work for my type of
                      business?
                    </h2>
                    <i className="fa fa-angle-down arrow" />
                  </div>
                  <div className="contentt">
                    <div className="service-info-summary">
                      <p>
                        Social media platforms are utilized every day by most
                        individuals around the world. Numerous consumers search
                        out a brand's social media pages or profile prior to
                        buying something. Our proficiency lies in our ability to
                        comprehend your business, discover and develop a
                        targeted following, and drive leads and sales for your
                        business.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head">
                    <h2>
                      How will social media marketing work for my type of
                      business?
                    </h2>
                    <i className="fa fa-angle-down arrow" />
                  </div>
                  <div className="contentt" style={{ display: 'none' }}>
                    <div className="service-info-summary">
                      <p>
                        Social media platforms are utilized every day by most
                        individuals around the world. Numerous consumers search
                        out a brand's social media pages or profile prior to
                        buying something. Our proficiency lies in our ability to
                        comprehend your business, discover and develop a
                        targeted following, and drive leads and sales for your
                        business.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head">
                    <h2>
                      How will social media marketing work for my type of
                      business?
                    </h2>
                    <i className="fa fa-angle-down arrow" />
                  </div>
                  <div className="contentt" style={{ display: 'none' }}>
                    <div className="service-info-summary">
                      <p>
                        Social media platforms are utilized every day by most
                        individuals around the world. Numerous consumers search
                        out a brand's social media pages or profile prior to
                        buying something. Our proficiency lies in our ability to
                        comprehend your business, discover and develop a
                        targeted following, and drive leads and sales for your
                        business.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head">
                    <h2>
                      How will social media marketing work for my type of
                      business?
                    </h2>
                    <i className="fa fa-angle-down arrow" />
                  </div>
                  <div className="contentt" style={{ display: 'none' }}>
                    <div className="service-info-summary">
                      <p>
                        Social media platforms are utilized every day by most
                        individuals around the world. Numerous consumers search
                        out a brand's social media pages or profile prior to
                        buying something. Our proficiency lies in our ability to
                        comprehend your business, discover and develop a
                        targeted following, and drive leads and sales for your
                        business.
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

export default SocialMedia
