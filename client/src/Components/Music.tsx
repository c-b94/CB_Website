import { useEffect, useState } from 'react'
import MusicCard from './MusicCard';
import SanityFetch from '../api/SanityFetch';

export default function Music() {
    interface Song{
       id:string
       cover: string;
        name: string;
        description: string;
        url: string;
    }
    const[musicCards,setMusicCards] = useState<JSX.Element[]>([]);
    const [catelog,setCatelog] = useState<Song[]>([]);
    useEffect(()=>{
        
        async function buildMusicCards(){
            if(catelog.length > 0){
                const html = catelog.map((song)=>{
                    return(
                        <MusicCard key={song.id} song={song}/>
                    )
                })
                setMusicCards(html)
            }else{
                setCatelog(await SanityFetch(`*[_type == 'song']{
                    name,
                    description,
                    "cover":cover.asset-> url,
                    "url": song.asset-> url
                  }`))
            } 
        }
        buildMusicCards()
    },[catelog])
    
  return (
    <div className="main-container phone:w-screen">Music
         <div className="spacer phone:w-screen"></div>
         <section className="section-container3">
            <div className="cover-container phone:p-4 phone:self-center phone:w-full phone:items-center">
                <div className="card-container flex-wrap flex-grow">
                    {musicCards}
                </div>
            </div>
         </section>
         <div className="spacer phone:w-screen"></div>
    </div>
  )
}
