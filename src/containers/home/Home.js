import React from 'react'
import Banner from '../../components/common/Banner'
import Clients from '../../components/common/Clients'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import HomeAbout from '../../components/common/HomeAbout'
import HomeAdvertising from '../../components/common/HomeAdvertising'
import HomeAwards from '../../components/common/HomeAwards'

import HomeEvents from '../../components/common/HomeEvents'
import HomeInfluencerMarketing from '../../components/common/HomeInfluencerMarketing'
import HomePortfolio from '../../components/common/HomePortfolio'
import HomeServices from '../../components/common/HomeServices'
import HomeTestimonials from '../../components/common/HomeTestimonials'
import HomeWebsiteDesign from '../../components/common/HomeWebsiteDesign'

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <HomeAbout />
      <HomeServices />
      <HomePortfolio />
      <HomeAwards />
      <HomeAdvertising />
      <HomeWebsiteDesign />
      <HomeInfluencerMarketing />
      <HomeEvents />
      <HomeTestimonials />
      <Clients />
      <Footer />
    </div>
  )
}

export default Home
