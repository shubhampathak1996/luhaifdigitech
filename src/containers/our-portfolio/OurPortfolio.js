import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import PageBanner from '../../components/common/PageBanner'
import { PORTFOLIO } from '../../shared/models/portfolio'
import SinglePortfolioCard from '../../components/common/SinglePortfolioCard'
import Clients from '../../components/common/Clients'

function OurPortfolio() {
  const [portfolio, setportfolio] = useState(PORTFOLIO)
  const [activemenu, setActivemenu] = useState('ALL')
  useEffect(() => {
    if (activemenu != 'ALL') {
      const filterData = PORTFOLIO.filter((item) => item.category == activemenu)
      setportfolio(filterData)
    } else {
      setportfolio(PORTFOLIO)
    }
  }, [activemenu])

  return (
    <>
      <Header />
      <PageBanner title={'Our Portfolio'} />
      <section className="showcase ptb-80 animate__animated animate__pulse animate__delay-2s">
        <div id="myBtnContainer" className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="button-work text-center">
                <button
                  className={activemenu == 'ALL' ? 'btn  btn-active' : 'btn'}
                  onClick={() => setActivemenu('ALL')}
                >
                  Show all
                </button>

                <button
                  className={
                    activemenu == 'DIGITALCAMPAIGNS' ? 'btn  btn-active' : 'btn'
                  }
                  onClick={() => setActivemenu('DIGITALCAMPAIGNS')}
                >
                  DIGITAL CAMPAIGNS
                </button>
                <button
                  className={
                    activemenu == 'PRINTWORK' ? 'btn  btn-active' : 'btn'
                  }
                  onClick={() => setActivemenu('PRINTWORK')}
                >
                  PRINT WORK
                </button>
                <button
                  className={activemenu == 'DESIGN' ? 'btn  btn-active' : 'btn'}
                  onClick={() => setActivemenu('DESIGN')}
                >
                  DESIGN
                </button>
                <button
                  className={
                    activemenu == 'SOCIALMEDIA' ? 'btn  btn-active' : 'btn'
                  }
                  onClick={() => setActivemenu('SOCIALMEDIA')}
                >
                  SOCIAL MEDIA
                </button>
                <button
                  className={activemenu == 'VIDEOS' ? 'btn  btn-active' : 'btn'}
                  onClick={() => setActivemenu('VIDEOS')}
                >
                  VIDEOS
                </button>
                <button
                  className={
                    activemenu == 'WEBSITE' ? 'btn  btn-active' : 'btn'
                  }
                  onClick={() => setActivemenu('WEBSITE')}
                >
                  WEBSITE
                </button>
                <button
                  className={
                    activemenu == 'SOFTWARE' ? 'btn  btn-active' : 'btn'
                  }
                  onClick={() => setActivemenu('SOFTWARE')}
                >
                  SOFTWARE
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            {portfolio &&
              portfolio.map((item) => {
                return (
                  <motion.div className="col-md-4">
                    <div className="column cars">
                      <div className="contenttt">
                        {item.video ? (
                          <iframe
                            width={'100%'}
                            height={300}
                            src={`https://www.youtube.com/embed/${item.id}`}
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <a href={item.link ? item.link : '#'}>
                            <img
                              src={item.image}
                              alt="Mountains"
                              style={{ width: '100%' }}
                            />
                          </a>
                        )}

                        <div className="contenttt">
                          <h4>
                            <a href="">{item.title}</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default OurPortfolio
