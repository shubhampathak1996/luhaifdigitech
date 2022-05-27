import React from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import PageBanner from '../../components/common/PageBanner'
import { BLOG } from '../../shared/models/blog'
import { Link } from 'react-router-dom'
import renderHTML from 'react-render-html'

function Blogs() {
  return (
    <>
      <Header />
      <PageBanner title={'Blogs'} />
      <section className="blog-ptb-50">
        <div className="container">
          <div className="row">
            {BLOG &&
              BLOG.map((item) => {
                return (
                  <div className="col-lg-4 mt60">
                    <div className="single-blog-post- shdo">
                      <div className="single-blog-img-">
                        <Link to={`/our-blogs/${item.link}`}>
                          <img src={item.image} className="img-fluid" />
                        </Link>
                        <div className="entry-blog-post dg-bg2">
                          <span className="bypost-">
                            <a href="https://luhaifdigitech.com/blog/2021/12/07/7-reasons-to-use-social-media-for-business/">
                              <i className="fa fa-user" /> Luhaif Digitech
                            </a>
                          </span>
                          <span className="posted-on-">
                            <a href>
                              <i className="fa fa-clock-o" /> {item.date}
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="blog-content-tt">
                        <div className="single-blog-info-">
                          <h4>
                            <Link to={`/our-blogs/${item.link}`}>
                              {item.title}
                            </Link>
                          </h4>
                          <p />
                          <div className="blog-sub">
                            {item.paragraph && renderHTML(item.paragraph)}
                          </div>
                        </div>
                        <div className="post-social">
                          <div className="ss-inline-share-wrapper ss-hover-animation-fade ss-inline-total-counter-left ss-left-inline-content ss-small-icons ss-with-spacing ss-circle-icons ss-without-labels">
                            <div className="ss-inline-share-content">
                              <div className="ss-social-icons-container">
                                <a href="#">Shares</a>
                                <a
                                  href="https://www.facebook.com/Luhaif-Digitech-102609387879230/"
                                  target="blank"
                                >
                                  <i className="fa fa-facebook" />
                                </a>
                                <a
                                  href="https://twitter.com/luhaifd"
                                  target="blank"
                                >
                                  <i className="fa fa-twitter" />
                                </a>
                                <a
                                  href="https://www.instagram.com/luhaifdigitech/"
                                  target="blank"
                                >
                                  <i className="fa fa-instagram" />
                                </a>
                                <a
                                  href="https://in.linkedin.com/company/luhaif-digitech?trk=public_profile_topcard-current-company"
                                  target="blank"
                                >
                                  <i className="fa fa-linkedin" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Blogs
