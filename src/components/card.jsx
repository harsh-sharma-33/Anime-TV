import React from 'react'
import { Link } from 'react-router-dom'

// import img from "../naruto.jpg"

const Card = ({ image, title, plot, rating, id }) => {

  // console.log(previousPath)
  return (
    <div className='card'>
      <img src={image} alt={title} />
      <div className='info'>
        <div className='wrapper'>
          <h2 className='title'>{title}</h2>
          <h3 className='rating'>Rating {rating}</h3>
          <p className='plot'>{plot}</p>
          <Link to={`/about/${id}`}>
            <button className='watch-btn'>read more</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
