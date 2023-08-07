import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import MusicCard from './MusicCard';


async function fetchMusic(){
    let PROJECT_ID ="ipn68qv1";
    let DATASET = "production"
    let Query = encodeURIComponent(`*[_type == 'song']{
        name,
        description,
        "cover":cover.asset-> url,
        "url": song.asset-> url
      }`)

   
    let url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${Query}`
    const response = await fetch(url)
    console.log(response)
    const music = await response.json()
    console.log(music.result)
    return music.result;
}

export default function Music() {
    const[musicCards,setMusicCards] = useState([]);
    const [catelog,setCatelog] = useState([]);
    useEffect(()=>{
        
        async function buildMusicCards(){
            if(catelog.length > 0){
                let html = catelog.map((song)=>{
                    return(
                        <MusicCard key={song.id} song={song}/>
                    )
                })
                   
                
                
                setMusicCards(html)
            }else{
                setCatelog(await fetchMusic())
            } 
        }
        buildMusicCards()
    },[catelog])
    console.log("in Catelog:",catelog)
  return (
    <div className="main-container">Music
         <div className="spacer"></div>
         <section className="section-container3">
            <div className="cover-container">
                <div className="card-container flex-wrap flex-grow">
                    {musicCards}
                </div>
            </div>
         </section>
         <div className="spacer"></div>
    </div>
  )
}
