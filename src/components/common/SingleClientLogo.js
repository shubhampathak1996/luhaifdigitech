import React from 'react'

function SingleClientLogo({ logo }) {
  return (
    <div className="single-logo">
      <img src={`/assets/images/${logo}`} />
    </div>
  )
}

export default SingleClientLogo
