import React from 'react'
import { CLIENTS } from '../../shared/models/clients'
import SingleClientLogo from '../../components/common/SingleClientLogo'
import Header from '../../components/common/Header'
import PageBanner from '../../components/common/PageBanner'
import Footer from '../../components/common/Footer'

function OurClients() {
  return (
    <div>
      <Header />
      <PageBanner title={'Our Clients'} />
      <section className="client-logo ptb-70">
        <div className="container">
          <div className="clients-flex">
            {CLIENTS &&
              CLIENTS.map((item, index) => {
                return <SingleClientLogo logo={item} />
              })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default OurClients
