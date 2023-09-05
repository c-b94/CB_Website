import React, { useEffect } from "react";
import pic1 from '../assets/mixing.jpg'
import pic2 from '../assets/small crowd.jpg'
import { useState} from "react";
import ImageCarousel from "./ImageCarousel";
import SanityFetch from "../api/SanityFetch";
import { PortableText } from "@portabletext/react";


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
  const [article, setArticle] = useState({});
  const [headshot,setHeadshot] = useState({});

  

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
        setImageArr(await SanityFetch(`*[_type == 'picture']{
          name,
          "image":image.asset-> url
        }`));
        const fetchedHeadshot = await SanityFetch(`*[_type == "author"][0] 
        {"image": headshot.asset->url}`)
        setHeadshot(fetchedHeadshot)
        
      }
    }

    async function buildArticle(){
      const aboutArticle = await SanityFetch(`*[_type == "articles" && title == "about"][0] 
      `)
      setArticle(aboutArticle)
      
    }
    buildCarousel();
    buildArticle();
  

  },[imageArr])
  console.log("map of images",carousel)
  console.log('headshot',headshot)
 
  return (
    <main className="main-container">
      <div className="spacer"></div>
      <section className="flex flex-row">
        <div className="w-1/2 overflow-hidden">
          <div className="h-96 carousel carousel-vertical rounded-box mt-36 ml-16">
            {carousel}
          </div>
        </div>
        <article className="text-lg w-1/2 text-left">
        
          <p className="m-4">
          <img className="rounded-full h-72 w-72" src={headshot.image} alt="headshot" />
            
            {
              <PortableText value={article.body}/>
            }
          </p>
        </article>
      </section>
      <div className="spacer"></div>
    </main>
  );
}
