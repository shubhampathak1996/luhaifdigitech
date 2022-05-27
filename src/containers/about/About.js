import React from 'react'
import Blockquote from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import HomeAbout from '../../components/common/HomeAbout'
import PageBanner from '../../components/common/PageBanner'

function About() {
  return (
    <div>
      <Header />
      <PageBanner title={'About Us'} />
      <section className="meet ptb-70 animate__animated animate__rubberBand animate__delay-1s">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="ceo-img">
                <img src="/assets/images/Pic_3.jpg"></img>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ceo-content">
                <h2>
                  MEET OUR CEO<br></br> <span>Mr. Saif Ahmad Khan</span>
                </h2>
                <p>
                  <b>Saif Ahmad Khan,</b> a student of IIM Nagpur, is an
                  entrepreneur, philanthropist, and the <b>Founder</b> of
                  <b> Luhaif Digitech.</b> Best described by his friends as
                  “secure in his uniqueness”. He has never been one to turn down
                  the more challenging and risky options in life. He has
                  received numerous awards for his philanthropic work in
                  providing quality out-of-school time programs for
                  underprovided youth. Through dynamic marketing of the health
                  and wellness, non-profit organization industry and
                  distribution of uplifting content, he now continues his quest
                  with several brands. He brings in more than eight years of
                  industry leadership, comprehensive synergistic blend of
                  expertise in business process management, and understanding of
                  sophisticated international markets.
                </p>
                <p>
                  During his occupation at different marketing agencies and
                  non-profit organizations for 8 years he has managed numerous
                  strategic and organizational projects and participated as
                  project manager, business development manager in the
                  development of the organizations. In parallel with his team
                  leading functions, he focused on implementing innovative
                  technological concepts and developing them into marketable
                  products/services, aiming at overcoming the different
                  challenges that arise in the era of digital innovation.
                  Inspired by the passion, courage, and brilliance of his
                  friends as well as his own love for helping underprivileged &
                  differently-abled children and following their dreams, he
                  started a non-profit organization, Save The Quest during his
                  college days. Committed to the cause of building bridges
                  between industry and capturing the interest of the target
                  audiences, he founded <b>Luhaif Digitech.</b>
                </p>
                <p>
                  Digital Marketing is complicated and ever changing. One of the
                  reasons he chose to start a digital marketing company from
                  scratch was to help the brands navigate this digital world we
                  live in. All these years have been great years for us.&nbsp;
                  <b>
                    He believes that, “His work gives him hope, it inspires him
                    to contribute more to the industry so that one day everyone
                    around the world can take the best marketing services under
                    one-umbrella from Luhaif Digitech”.
                  </b>
                  We've welcomed new talents on our team, we've implemented
                  better processes to make everyone's life easier, we've
                  launched amazing campaigns and we've seen awesome results
                  throughout these years.
                </p>
                <p>
                  He prioritizes making <b>Luhaif Digitech</b> a brand across
                  the globe in the coming years. He’s incredibly excited for the
                  opportunity to connect with and get to know more people in
                  this community!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeAbout />
      <section className="about-page ptb-70 animate__animated animate__rubberBand animate__delay-4s">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="luhaif-content">
                <h2>
                  Why Choose <span>Luhaif Digitech?</span>
                </h2>
                <p>
                  In today’s growing era of technology ‘Luhaif Digitech’ is a
                  renowned name in the industry of digital marketing across the
                  world. Established in Delhi, India ‘Luhaif Digitech’ is among
                  the finest Digital Marketing companies in India. ‘Luhaif
                  Digitech’ came into existence after its parent company ‘Luhaif
                  Developers’ that has a collaborative experience of 11 years
                  established it in Delhi. We are always here to lend you a
                  helping hand so that you can take the advantage of marketing
                  prospects across a variety of channels in real-time. Our
                  highly competent team of professional developers and designers
                  make sure to deliver exceptionally magnificent results to the
                  clients.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="luhaif-video">
                <img src="assets/images/about-banner.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
