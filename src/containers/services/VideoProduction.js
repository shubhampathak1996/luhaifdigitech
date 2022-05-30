import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function VideoProduction() {
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
      <PageBanner title={'Video Production'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="sec-heading">
                <h2>
                  Telling your story with <span>videos! </span>
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
                      <img src="/assets/images/video_production.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="luhaif-content">
                      <p>
                        Luhaif Digitech is fully equipped with a team of trained
                        videographers, photographers, cinematographers,
                        copywriters, art directors who have an extensive
                        experience of producing, directing, scriptwriting,
                        shooting and editing video content.
                      </p>
                      <p>
                        We believe in using the best cameras, audio equipment
                        and post-production assets in the industry to produce
                        high-quality videos that are helpful for you in
                        achieving your business goals. We are a Full-fledge
                        Video Production Company that helps you in the
                        simplification of the production and editing process,
                        therefore, resulting in quick turnaround times. So, if
                        you need a video to boost your virtual storefront,
                        corporate training videos, or need a creative
                        post-production team to level up your internal videos,
                        give us a call.
                      </p>
                      <h3>Our Video Production Services include:</h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Conceptualizing, producing, and publishing all types
                          of video content.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Pre-Production Services: Storyboarding, Project
                          Timeline, Script Creation
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Providing good scripts through seasoned script
                          writers.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />A travel-ready
                          camera operator, video crew and team of video editors.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Post-production services for the footage we’ve shot or
                          raw footage you already have.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />A video
                          animation team that can create 2D and 3D animations,
                          motion graphics and animated logos, and assist with
                          post-production editing.
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
                    <h2>
                      How do I know if video production would be a fit for my
                      business’s marketing needs?
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
                        A video has the potential to increase the conversions by
                        80% and reach massive audiences to fulfill business
                        goals. Videos can also contribute to sales directly. So,
                        video production is certainly a good fit.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('B')}>
                    <h2>How long should my online video be?</h2>

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
                        Most videos on the web shouldn’t be longer than a few
                        minutes. However, depending on the content, nature of
                        the targeted audience & platform, video lengths may
                        differ. For instance, FB & IG can have comparatively
                        shorter videos in comparison to YouTube.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('C')}>
                    <h2>How much should my video cost?</h2>

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
                        Cost depends on the idea and the number of scenes,
                        explosions and crew members required to get the job
                        done. In other words, the project complexities involved
                        are determinants for the video costing.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('D')}>
                    <h2>How long will it take to produce my video?</h2>

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
                        Social videos comparatively take lesser time to be
                        produced in comparison to corporate videos. The more
                        complex the video project is, the more is the project
                        turnaround time.
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

export default VideoProduction
