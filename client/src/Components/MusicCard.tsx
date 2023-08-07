import React from 'react'
import ReactPlayer from 'react-player'
export default function MusicCard(props) {
    console.log("musiccard props:",props)
  return (
    <div className="cover-innerContainer w-full flex-row justify-center">
        <div className="flex items-center justify-center">
        <img className="h-5/6" src={props.song.cover} alt="no image" />
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center">
        <p className="text-lg">{props.song.name}</p>
        <p className="text-lg">{props.song.description}</p>
        <ReactPlayer url={props.song.url} volume='0.75' controls={true} width='200px' height='50px' wrapper='div'/>
        </div>
        
</div>)
  
}
