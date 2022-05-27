import React from 'react'

function PageBanner({ title }) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="page-content">
          <h1> {title} </h1>
        </div>
      </div>
    </section>
  )
}

export default PageBanner
