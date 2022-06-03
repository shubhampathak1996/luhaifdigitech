import React from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'

function Contact() {
  return (
    <div>
      <Header />
      <PageBanner title={'Contact Us'} />
      <section className="contact-us ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="main-holder">
                <div className="icon-main-contact">
                  <img src="assets/images/map.png" />
                  <h2>Address</h2>
                  <p>E-16 Gk-1 Greater Kailash, New Delhi, Delhi 110048</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="main-holder">
                <div className="icon-main-contact">
                  <img src="assets/images/email-main.png" />
                  <h2>Contact Us</h2>
                  <p>info@luhaifdigitech.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="main-holder">
                <div className="icon-main-contact">
                  <img src="assets/images/email-con.png" />
                  <h2>Call Us</h2>
                  <p>+91-8585907442</p>
                  <p>+91-9643557442</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="main-holder">
                <div className="icon-main-contact">
                  <img src="assets/images/social.png" />
                  <h2>Social</h2>
                  <ul className=" cont">
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
        </div>
      </section>

      <section className="contact-form ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="sec-heading">
                <h2>
                  Have an <span>Enquiry?</span>
                </h2>
              </div>
            </div>
          </div>
          <form>
            <div className="main-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message"
                      id="exampleFormControlTextarea1"
                      rows={8}
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="submit-button">
                  <button className="btn btn-all btn-main">Sumbit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
