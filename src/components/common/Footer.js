import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function Footer() {
  const media = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <section className="media-coverage mt-5 animate__animated animate__rubberBand animate__delay-2s">
        <div className="container">
          <div class="row">
            <div class="col-md-7 mx-auto">
              <div class="sec-heading">
                <h2>
                  <span>Featured</span> In
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <Slider {...media}>
                <div className="media">
                  <a
                    href="https://www.mid-day.com/brand-media/article/perseverance-is-what-has-finally-enabled-luhaif-digitech-to-celebrate-a-big-milestone-of-8-years-in-the-marketing-industry-saif-ahmad-khan-founder-23222425"
                    target="_blank"
                  >
                    <img src="/assets/images/media_1.png" />
                  </a>
                </div>
                <div className="media">
                  <a
                    href="https://www.outlookindia.com/outlook-spotlight/digital-marketing-can-help-your-business-to-grow-revenue-mr-saif-ahmad-khan-founder-luhaif-digitech-news-190476"
                    target="_blank"
                  >
                    <img src="/assets/images/media_2.png" />
                  </a>
                </div>
                <div className="media">
                  <a
                    href="https://postmannews.com/elevate-your-business-through-digital-marketing-mr-saif-ahmad-khan-founder-luhaif-digitech/"
                    target="_blank"
                  >
                    <img src="/assets/images/media_3.png" />
                  </a>
                </div>
                <div className="media">
                  <a
                    href="https://www.adgully.com/10-reasons-why-you-need-digital-marketing-116766.html"
                    target="_blank"
                  >
                    <img src="/assets/images/media-4.png" />
                  </a>
                </div>
                <div className="media">
                  <a
                    href="https://businessdeccan.com/luhaif-digitech-is-helping-businesses-in-enhancing-their-brand-image-influence-target-audience-and-helping-them-in-generating-revenue-saif-ahmad-khan-founder/"
                    target="_blank"
                  >
                    <img src="/assets/images/media_5.png" />
                  </a>
                </div>
                <div className="media">
                  <a
                    href="https://www.thestatesman.com/inspiration-hub/luhaif-digitech-enhancing-professional-digital-presence-globalizing-brands-saif-ahmad-khan-1503071064.html"
                    target="_blank"
                  >
                    <img src="/assets/images/media_6.png" />
                  </a>
                </div>
                <div className="media">
                  <a
                    href="https://www.telegraphindia.com/business/successful-institution-building-is-dependent-on-forging-result-oriented-partnerships-and-creating-new-knowledge-saif-ahmad-khan-founder-luhaif-digitech/cid/1864729"
                    target="_blank"
                  >
                    <img src="/assets/images/media_7.png" />
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="office-location mt-5 animate__animated animate__rubberBand animate__delay-7s">
        <div className="container">
          <div class="row">
            <div class="col-md-7 mx-auto">
              <div class="sec-heading">
                <h2>
                  Our <span>Offices</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="office-card">
                <div
                  className="skyline-img"
                  data-tilt
                  data-tilt-max={4}
                  data-tilt-speed={1000}
                  style={{
                    willChange: 'transform',
                    transform:
                      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  }}
                >
                  <img
                    src="/assets/images/newyork.png"
                    alt="New York"
                    className="img-fluid"
                  />
                </div>
                <div className="office-text">
                  <h4>USA</h4>
                  <p>17153 STE 1 Bear Valley RdHesperia, CA 92345, USA</p>
                  <a
                    href="https://goo.gl/maps/QE7AEpDtVUYL5w4o7"
                    target="blank"
                    className="btn-outline"
                  >
                    View on Map <i className="fa fa-chevron-right fa-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="office-card">
                <div
                  className="skyline-img"
                  data-tilt
                  data-tilt-max={4}
                  data-tilt-speed={1000}
                  style={{
                    willChange: 'transform',
                    transform:
                      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  }}
                >
                  <img
                    src="/assets/images/newyork.png"
                    alt="New York"
                    className="img-fluid"
                  />
                </div>
                <div className="office-text">
                  <h4>Delhi</h4>
                  <p>E-16 Gk-1 Greater Kailash, New Delhi, Delhi 110048</p>
                  <a
                    href="https://goo.gl/maps/2JXd3rjBBMcyHN7L7"
                    target="blank"
                    class="btn-outline"
                  >
                    View on Map <i class="fa fa-chevron-right fa-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="office-card">
                <div
                  className="skyline-img"
                  data-tilt
                  data-tilt-max={4}
                  data-tilt-speed={1000}
                  style={{
                    willChange: 'transform',
                    transform:
                      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  }}
                >
                  <img
                    src="/assets/images/newyork.png"
                    alt="New York"
                    className="img-fluid"
                  />
                </div>
                <div className="office-text">
                  <h4>Canada</h4>
                  <p>
                    123 Arabian Drive, Suite 306, Fort McMurray, Alberta, Canada
                    T9H 5N9
                  </p>
                  <div>
                    <a
                      href="https://goo.gl/maps/cRNinmziBuGimMGj7"
                      target="blank"
                      className="btn-outline"
                    >
                      View on Map <i className="fa fa-chevron-right fa-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="office-card">
                <div
                  className="skyline-img"
                  data-tilt
                  data-tilt-max={4}
                  data-tilt-speed={1000}
                  style={{
                    willChange: 'transform',
                    transform:
                      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  }}
                >
                  <img
                    src="/assets/images/newyork.png"
                    alt="New York"
                    className="img-fluid"
                  />
                </div>
                <div className="office-text">
                  <h4>Dubai</h4>
                  <p>201, Al Reyami building, Umm Hurair street, Dubai</p>
                  <a
                    href="https://g.page/reyamitech"
                    target="blank"
                    className="btn-outline"
                  >
                    View on Map <i className="fa fa-chevron-right fa-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lets-work ptb-70 animate__animated animate__rubberBand animate__delay-8s">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="lets-work">
                <h2>Let’s Work Together!</h2>
                <h4>info@luhaifdigitech.com</h4>
                <div className="contact-us-but">
                  <Link to="/contact-us" className="btn btn-contact-us">
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-logo">
                <img src="/assets/images/logo.png" />
              </div>
              <div className="social-main">
                <ul className="">
                  <li className="list-inline-item m-0">
                    <Link to="/">Home</Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/about-us">About Us</Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/our-portfolio">Our Portfolio</Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li>
                    <Link to="/case-study">Case Study</Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/our-clients">Our Clients</Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/our-blogs">Our Blogs</Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="social-main">
                <ul className="">
                  <li className="list-inline-item m-0">
                    <Link to="/services/digital-marketing">
                      Digital Marketing
                    </Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <li>
                      <Link to="/social-media-marketing">
                        Social Media Marketing
                      </Link>
                    </li>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/services/website-design-and-development">
                      Web Design And Development
                    </Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/services/ngo-fundraising-campaigns">
                      NGO And Fundraising Campaign
                    </Link>
                    <span className="text-orange ">|</span>
                  </li>

                  <li className="list-inline-item m-0">
                    <Link to="/services/video-production">
                      Video Production
                    </Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/services/influencer-marketing">
                      Influencer Marketing
                    </Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/services/google-search-and-display-advertising">
                      Google Search & Display Advertising
                    </Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/services/crm-and-lead-management-solutions">
                      CRM & Lead Management Solutions
                    </Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/services/search-engine-optimisation">
                      Search Engine Optimisation
                    </Link>
                    <span className="text-orange ">|</span>
                  </li>
                  <li className="list-inline-item m-0">
                    <Link to="/services/nidhi-software">Nidhi Software</Link>
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <ul className="so-me">
                  <li>
                    <a
                      href="https://www.facebook.com/pg/Luhaif-Digitech-102609387879230/posts/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/luhaifd" target="_blank">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/luhaifdigitech/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://in.linkedin.com/company/luhaif-digitech"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>Copyright © 2022 Luhaif Digitech. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="whatsapp-footer">
        <div className="whatsapp-fix">
          <a href="https://wa.me/919643557442?text=How May I Help You ?">
            <img src="/assets/images/whatsapp.png" />
          </a>
        </div>
      </div>
      <a
        id="scrollUp"
        href="#top"
        title="Scroll to top"
        style={{ position: 'fixed', zIndex: 2147483647 }}
      />
    </>
  )
}

export default Footer
