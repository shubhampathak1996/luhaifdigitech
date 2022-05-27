import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'

function VideoProduction() {
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
