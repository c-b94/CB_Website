import React from "react";
import { useEffect, useState } from "react";
import bodyImage from "./assets/illustration-1.svg";
import tag1Image from "./assets/small crowd.jpg";
import tag2Image from "./assets/coding.jpg";
import tag3Image from "./assets/mixing.jpg";
import { LinkedInEmbed } from "react-social-media-embed";
import { InstagramEmbed } from "react-social-media-embed";
import bgImage from "./assets/cbworks_topographical_texture edit2.png";
import SanityFetch from "./api/SanityFetch";
import { PortableText } from "@portabletext/react";
import usePersonal from "./hooks/usePersonal";


export default function Home() {
const [welcomeMessage,setWelcomeMessage] = useState({})
const [projects,setProjects] = useState([]);
const [shows,setShows] = useState([]);
const [author,setAuthor] = useState({});

const me = usePersonal();
console.log("my info", me)


  useEffect(()=>{
    async function buildWelcomeMessage(){
      setWelcomeMessage(await SanityFetch(`*[_type == "articles" && title == "Welcome"][0]`))
    }

    async function buildProjectsFeed(){
      setProjects(await SanityFetch(`*[_type == "projects"]`))
    }

    async function buildShowsFeed(){
      setShows(await SanityFetch(`*[_type == "shows"]`))
    }

    buildWelcomeMessage()
    buildProjectsFeed()
    buildShowsFeed()
  },[])

  function dateSorting(arr) {
      const a = arr[0];
      const b = arr[1];
      arr.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        console.log(`A:${dateA}, B:${dateB}`);
        return dateA - dateB;
      });
      console.log(`loop`, arr);
    
  }
 
console.log("projects",projects)
console.log("shows",shows)
dateSorting(projects)
dateSorting(shows)
console.log("sorting projects",projects)
console.log("sorting shows",shows)

const projectsHtml = projects.map((project)=>{
  return(
    <div >
      <p >{project.title}</p>
      <p className="text-secondary">{project.category}</p>
      <div className="m-2"></div>
      <p>{project.description}</p>
      <div className="m-2"></div>
      <p>{project.startDate}</p>
      <hr />
    </div>
  )
})
const showsHtml = shows.map((show)=>{
  return(
    <div >
      <p>{show.title}</p>
      <p className="text-secondary">{show.date}</p>
      <hr />
    </div>
  )
})

console.log("projectsHTML",projectsHtml)
  return (
    <main className="flex flex-col text-5xl font-bold justify-center">
      <img src={bodyImage} alt="bodyImage" />
      <div className="h-32 background1"></div>
      {/**spacer */}
      <section className="flex flex-col place-items-center gap-16">
        <div className="flex flex-row justify-between w-2/3 gap-8">
          <h2 className="self-center ml-16">LiveSound</h2>
          <img src={tag1Image} alt="tag1 image" className="w-2/3 h-64" />
        </div>
        <div className="flex flex-row justify-between w-2/3 gap-8">
          <img src={tag2Image} alt="tag2 image" className="w-2/3 h-64" />
          <h2 className="self-center mr-8">Programming</h2>
        </div>
        <div className="flex flex-row justify-between w-2/3 gap-8">
          <h2 className="self-center ml-16">Recording</h2>
          <img src={tag3Image} alt="tag3 image" className="w-2/3 h-64" />
        </div>
      </section>
      <div className="h-32 background1"></div>
      {/**spacer */}
      <section className="flex flex-col gap-16">
        <h2 className="text-left">FEED<hr className="border-[#F4A30B]"/></h2>
        
        <div className="flex flex-row gap-8">
          <div
            style={{ display: "flex", justifyContent: "flex-start" }}
            className="ml-8 pb-16"
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/CtYuE7RuBir/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={450}
            />
          </div>
          <article className="flex flex-col">
            {/* <h3 className="self-start">About</h3> */}
            <p className="text-[#F4A30B] self-start">////////   ////////    ////////</p>
            
          <p className="mt-8 mb-8">
          {<PortableText value={welcomeMessage.body}/>}
          </p>
          <p className="text-secondary self-end">                       //_ _</p>
          </article>
          
        </div>
      </section>
      <div className="h-32 background1"></div>
      {/**spacer */}
      <div className="flex h-auto flex-grow justify-center p-8">
        <section 
          
          className={`flex h-auto flex-row justify-between w-3/4 outline outline-white p-16 gap-16 background1`}
        >
          
          <div className="flex h-auto flex-grow flex-wrap w-56 h-64 outline outline-[#F4A30B] p-4 bg-black">
            <p className="text-4xl ">recent projects</p>
            <div className="text-sm mt-4">
            {projectsHtml}
            </div>
            
          </div>
          <div className="flex h-auto flex-wrap w-56 h-64 outline outline-[#F4A30B] p-4 bg-black">
            <p className="text-4xl">upcoming shows</p>
            <div className="text-sm mt-4">
            {showsHtml}
            </div>
          </div>
          <div className="flex h-auto flex-wrap w-56 h-64 outline outline-[#F4A30B] p-4 bg-black ">
            <p className="text-4xl">contact Info</p>
            <div className="text-xs mt-4">
            <p>Email:</p>
            {me.author.email}
            <hr />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
