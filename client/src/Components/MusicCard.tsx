import React from 'react'
import ReactPlayer from 'react-player'
export default function MusicCard(props) {
    
  return (
    <div className="cover-innerContainer w-full flex-row justify-center phone:flex-col phone:h-fit">
        <div className="flex items-center justify-center">
        <img className="h-5/6 phone:h-40" src={props.song.cover} alt="no image" />
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center phone:self-center">
        <p className="text-lg underline phone:text-sm">{props.song.name}</p>
        <p className="text-lg phone:text-sm">{props.song.description}</p>
        <ReactPlayer url={props.song.url} volume='0.75' controls={true} width='200px' height='50px' wrapper='div'/>
        </div>
        
</div>)
  
}
