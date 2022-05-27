import React, { useState } from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'

function SearchEngineOptimisation() {
  const [faq, setfaq] = useState('A')
  return (
    <div>
      <Header />
      <PageBanner title={'Search Engine Optimisation'} />
      <section className="main-section-page ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="sec-heading">
                <h2>
                  Crush your competitors through <span>search engines!</span>
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
                      <img src="/assets/images/SEO.png" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="luhaif-content">
                      <p>
                        In this competitive world, everyone wants to become the
                        best in whatever they do. In the same way, every person
                        wishes to make their business best and appears at the
                        top of Search Engine Result Pages (SERPs). SEO is very
                        important for your business if you want to reach a
                        maximum number of people, hence SEO results in more
                        traffic on your website.
                      </p>
                      <p>
                        We at Luhaif Digitech, offer you the flexibility to
                        select the best fit according to your needs and budget
                        for your website with different SEO plans. Our SEO
                        packages are designed in a way to keep searchers coming
                        back on your website and keep your target audience on
                        the Search Engine Result Pages (SERPs) for a longer
                        time. Our inclusive SEO packages comprise all the
                        essential On-Page and Off-Page optimizations that are
                        required to bring SEO success for your business.
                      </p>
                      <h3>Our Search Engine Optimization Services include:</h3>
                      <ul>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Optimizing a website in order to enhance traffic,
                          leads and brand awareness from local search.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Providing content that is effective in enhancing
                          search engine optimization (SEO) and online
                          visibility.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Providing service for getting a website rank better
                          for product or service-related search terms.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Analysing the website for search engine visibility.
                          Issues like improper crawling and indexing of your
                          website on SEO are addressed by proper evaluation of
                          the website.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Recommending a set of keywords that will enhance your
                          websites’ visibility on search engines.
                        </li>
                        <li>
                          <i className="fa fa-check-square-o" />
                          Accessing the quality and quantity of your websites’
                          backlinks. Our strategy-approach towards SEO helps get
                          rid of poor backlinks, and build authentic and quality
                          backlinks to your website.
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
                    <h2>What is SEO?</h2>

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
                        Search Engine Optimization is the activity of ranking a
                        website on the search engines. This is done to increase
                        the website’s visibility when users search for relevant
                        keywords and queries on the web.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('B')}>
                    <h2>Does my business need SEO?</h2>

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
                        Yes, SEO increases website ranks organically on the
                        search engines. This increased traffic is free (at least
                        in terms of a cost-per-click).
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('C')}>
                    <h2>
                      What services would be suitable for my business- SEO or
                      PPC (Pay-Per-Click) Ads?
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
                        A business could use both SEO & PPC Ads service as this
                        would avoid reliance on any single source of traffic &
                        hence conversions.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="accordion-1">
                  <div className="head" onClick={() => setfaq('D')}>
                    <h2>
                      I have a very limited marketing budget. What should I do
                      when it comes to optimizing marketing campaigns like SEO?
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
                        It's essential to balance a long-term SEO strategy with
                        a small but targeted PPC campaign. This could help you
                        achieve your business goals effectively & efficiently.
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

export default SearchEngineOptimisation
