import React from 'react'

export default function ImageCarousel(props) {

    console.log("imagecarousel props:",props)
  return (
    <div className="carousel-item carousel-center h-full">
              <img src={props.image.image} alt={props.image.name}/>
            </div>
  )
}
