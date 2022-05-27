import React from 'react'

function SinglePortfolioCard({ portfolio }) {
  return (
    <div className="container-image-box">
      <img src={portfolio.image} alt="Avatar" className="image" />

      <div className="text">
        <h4>
        {portfolio.company}
        </h4>
        <h5>{portfolio.service}</h5>
      </div>
    </div>
  )
}

export default SinglePortfolioCard
