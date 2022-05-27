import React from 'react'
import { Link } from 'react-router-dom'
import { CLIENTS } from '../../shared/models/clients'
import SingleClientLogo from './SingleClientLogo'

function Clients() {
  return (
    <section className="client-logo ptb-70">
      <div className="container">
        <div class="row">
          <div class="col-md-7 mx-auto">
            <div class="sec-heading">
              <h2>
                Our <span>Clients</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="clients-flex">
          {CLIENTS &&
            CLIENTS.map((item, index) => {
              if (index < 12) {
                return <SingleClientLogo logo={item} />
              }
            })}
        </div>
        <div class="contact-us-but text-center">
          <Link to="/our-clients" class="btn btn-contact-us">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Clients
