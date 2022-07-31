import React from 'react'

function PlaceDetails({place}) {
  return (
    <div className='card'>
        <div className="img">
          {/* Image goes here */}
        </div>
        <div className="card-content">
          <title className="name">
            <h1>{place.name}</h1>
          </title>
          
        </div>
    </div>
  )
}

export default PlaceDetails