import React, { useEffect } from "react";
import pic1 from '../assets/mixing.jpg'
import pic2 from '../assets/small crowd.jpg'
import { useState} from "react";
import ImageCarousel from "./ImageCarousel";

async function fetchImages(){
  let PROJECT_ID ="ipn68qv1";
  let DATASET = "production"
  let Query = encodeURIComponent(`*[_type == 'picture']{
    name,
    "image":image.asset-> url
  }`)

 
  let url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${Query}`
  const response = await fetch(url)
  console.log(response)
  const images = await response.json()
  return images.result;
}

async function fetcharticles(){
  let PROJECT_ID ="ipn68qv1";
  let DATASET = "production"
  let Query = encodeURIComponent(`*[_type == 'picture']{
    name,
    "image":image.asset-> url
  }`)

 
  let url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${Query}`
  const response = await fetch(url)
  console.log(response)
  const images = await response.json()
  return images.result;
}

export default function About() {
  const [imageArr,setImageArr] = useState([]);
  const [carousel,setCarousel] = useState([]);
  useEffect(()=>{
    async function buildCarousel(){
      if(imageArr.length >0){
        let html = imageArr.map((image)=>{
          return(
            <ImageCarousel key={image.id} image={image}/>
          )
        })
        
        setCarousel(html);
      }else{
        
        setImageArr(await fetchImages());
        
      }
    }

    buildCarousel();

  },[imageArr])
  console.log("map of images",carousel)
 
  return (
    <main className="main-container">
      <div className="spacer"></div>
      <section className="flex flex-row">
        <div className="w-1/2 overflow-hidden">
          <div className="h-96 carousel carousel-vertical rounded-box">
            {carousel}
          </div>
        </div>
        <article className="text-lg w-1/2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fugit
            hic repudiandae mollitia minus eveniet ab temporibus similique
            velit. Beatae, labore! Dolores ullam quibusdam, voluptatibus
            corporis ea doloremque accusantium tenetur.
          </p>
        </article>
      </section>
      <div className="spacer"></div>
    </main>
  );
}
