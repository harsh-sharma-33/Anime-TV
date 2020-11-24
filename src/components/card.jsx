import React from 'react'
// import img from "../naruto.jpg"

const Card = ({ image, title, plot, rating }) => {

  return (
    <div className='card'>
      <img src={image} />
      <div className='info'>
        <div className='wrapper'>
          <h2 className='title'>{title}</h2>
          <h3 className='rating'>Rating {rating}</h3>
          <p className='plot'>{plot}</p>
          <button className='watch-btn'>watch now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
