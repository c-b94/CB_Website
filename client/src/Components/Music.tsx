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
    <div className="flex-col text-5xl font-bold justify-center  phone:w-screen">Music
         <div className="spacer background1 phone:w-screen"></div>
         <section className="bg-black flex h-auto flex-grow justify-center p-8 ">
            <div className="flex h-auto flex-row justify-between w-3/4 outline outline-white p-16 gap-16 background1  phone:p-4 phone:self-center phone:w-full phone:items-center">
                <div className="flex flex-wrap flex-grow gap-8">
                    {musicCards}
                </div>
            </div>
         </section>
         <div className="spacer background1 phone:w-screen"></div>
    </div>
  )
}
