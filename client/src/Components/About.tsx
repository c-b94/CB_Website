import { useEffect,ReactElement } from "react";
import { useState} from "react";
import ImageCarousel from "./ImageCarousel";
import SanityFetch from "../api/SanityFetch";
import { PortableText } from "@portabletext/react";



export default function About() {
  interface Article{
    body: [];
  }

  interface Headshot{
    image: string
  }
  const [imageArr,setImageArr] = useState<Array<{id:string}>>([]);
  const [carousel,setCarousel] = useState<ReactElement | null>(null)
  const [article, setArticle] = useState<Article>({body:[]});
  const [headshot,setHeadshot] = useState<Headshot>({image:""});
 
  

  useEffect(()=>{
    async function buildCarousel(){
      if(imageArr.length >0){
        const html = imageArr.map((image)=>{
          return(
            <ImageCarousel key={image.id} image={image}/>
          )
        })
        setCarousel(<>{html}</>);
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
  
 
  return (
    <main className="main-container">
      <div className="spacer slowmotion"></div>
      <section className="flex flex-row bg-black phone:flex-col-reverse">
        <div className="w-1/2 overflow-hidden phone:w-screen">
          <div className="h-96 carousel carousel-vertical rounded-box mt-36 ml-16 phone:ml-0">
            {carousel}
          </div>
        </div>
        <article className="text-lg w-1/2 text-left phone:w-screen phone:text-center">
        
          <p className="m-4">
          <img className="rounded-full h-72 w-72 phone:ml-8" src={headshot.image} alt="headshot" />
            
            {
              <PortableText value={article.body}/>
            }
          </p>
        </article>
      </section>
      <div className="spacer slowmotion"></div>
    </main>
  );
}
