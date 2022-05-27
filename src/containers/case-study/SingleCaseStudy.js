import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import PageBanner from "../../components/common/PageBanner";

function SingleCaseStudy() {
  return (
    <div>
      <Header />
      <PageBanner />
      <section className="case-single-study ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-case-stu">
                <img src="https://luhaifdigitech.com/images/case-study/app-intro.png" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="common-heading">
                <div className="common-heading inner-heading text-l pl25">
                  <h4 className="pt-2">CLIENT: DERMAPURITYS</h4>
                  <h4 className="pt-2">
                    INDUSTRY: SKIN CARE &amp; HAIR CARE CENTRE
                  </h4>
                  <h4 className="pt-2">
                    SERVICES: DIGITAL MARKETING, LEAD GENERATION
                  </h4>
                  <h2 className="pt-5">About</h2>
                  <p>
                    Dermapuritys, an integrated skincare &amp; hair-care centre
                    offers services across skin, hair and body treatments using
                    latest technologies and methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="problem" style={{ backgroundColor: "#e41d2e" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="problem-heading">
                <h2>PROBLEMS</h2>
                <ul>
                  <li>
                    <i className="fa fa-check" /> Low Volume Leads: They were
                    not getting much leads from Search Ads.
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Traffic &amp; in-fact quality traffic was the 2nd major
                    problem when we took over the work.
                  </li>
                  <li>
                    <i className="fa fa-check" /> Low interaction rate:
                    "Interaction rate" measures how often people interact with
                    your ad after it's shown to them. It was another problem
                    faced by the client.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="problem-heading">
                <h2>OUR SOLUTIONS</h2>
                <ul>
                  <li>
                    <i className="fa fa-check" /> Low Volume Leads: They were
                    not getting much leads from Search Ads.
                  </li>
                  <li>
                    <i className="fa fa-check" /> Traffic &amp; in-fact quality
                    traffic was the 2nd major problem when we took over the
                    work.
                  </li>
                  <li>
                    <i className="fa fa-check" /> Low interaction rate:
                    "Interaction rate" measures how often people interact with
                    your ad after it's shown to them. It was another problem
                    faced by the client.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="growth ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-heading">
                <h2>Growth Rate</h2>
              </div>
            </div>
          </div>
          <div className="groth-rate-main">
            <div className="row">
              <div className="col-md-6">
                <div className="growth-img">
                  <img src="https://luhaifdigitech.com/images/case-study/Derma_1.JPG" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="growth-img">
                  <img src="https://luhaifdigitech.com/images/case-study/Derma_1.JPG" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SingleCaseStudy;
