

export default function ImageCarousel(props:any) {

    
  return (
    <div className="carousel-item carousel-center h-full">
              <img src={props.image.image} alt={props.image.name}/>
            </div>
  )
}
