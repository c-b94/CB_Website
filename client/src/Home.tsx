
import { useEffect, useState } from "react";
import bodyImage from "./assets/illustration-1.svg";
import tag1Image from "./assets/small crowd.jpg";
import tag2Image from "./assets/coding.jpg";
import tag3Image from "./assets/mixing.jpg";
import { InstagramEmbed } from "react-social-media-embed";
import SanityFetch from "./api/SanityFetch";
import { PortableText } from "@portabletext/react";


interface Project {
  title: string;
  category: string;
  description: string;
  startDate: string; // You might want to use a Date type here if applicable
}

interface Show {
  title: string;
  where: string;
  date: string; // You might want to use a Date type here if applicable
}

interface Welcome{
  body:[]
}



export default function Home() {
const [welcomeMessage,setWelcomeMessage] = useState<Welcome>({body:[]})
const [projects,setProjects] = useState<Project[]>([]);
const [shows,setShows] = useState<Show[]>([]);





  useEffect(()=>{
    async function buildWelcomeMessage(){
      setWelcomeMessage(await SanityFetch(`*[_type == "articles" && title == "Welcome"][0]`))
    }

    async function buildProjectsFeed(){
      setProjects(await SanityFetch(`*[_type == "projects"]`))
    }

    async function buildShowsFeed(){
      setShows(await SanityFetch(`*[_type == "shows" && date > now()]`))
    }

    buildWelcomeMessage()
    buildProjectsFeed()
    buildShowsFeed()
  },[])

  function dateSorting(arr:{date: string}[]) {
      // const a = arr[0];
      // const b = arr[1];
      arr.sort((a, b) => {
        const dateA = new Date(a.date) as any;
        const dateB = new Date(b.date) as any;
       
        return dateA - dateB;
      });
     
    
  }
 


dateSorting(shows)


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
      <p>{show.where}</p>
      <p className="text-secondary">{show.date}</p>
      <hr />
    </div>
  )
})


  return (
    <main className="flex flex-col text-5xl font-bold justify-center phone:w-screen">
      <img src={bodyImage} alt="bodyImage" />
      <div className="spacer background1"></div>
      {/**spacer */}
      <section className="flex flex-col place-items-center gap-16 bg-black phone:gap-0 ">
        <div className="flex flex-row justify-between w-2/3 gap-8 
        phone:text-2xl phone:flex-col phone:w-screen">
          <h2 className="self-center ml-16 phone:ml-0 phone:mt-4">LiveSound</h2>
          <img src={tag1Image} alt="tag1 image" className="w-2/3 h-64 phone:self-center phone:w-screen" />
        </div>
      <div className="h-32 background1 hidden phone:w-screen phone:block phone:h-16 outline outline-2 outline-purple"></div>{/**phone spacer */}
        <div className="flex flex-row justify-between w-2/3 gap-8
        phone:text-2xl phone:flex-col-reverse phone:w-screen">
          <img src={tag2Image} alt="tag2 image" className="w-2/3 h-64 phone:self-center phone:w-screen" />
          <h2 className="self-center mr-8 phone:mr-0 phone:mt-4">Programming</h2>
        </div>
      <div className="h-32 background1 hidden phone:w-screen phone:block phone:h-16 outline outline-2 outline-purple"></div>{/**phone spacer */}
        <div className="flex flex-row justify-between w-2/3 gap-8
        phone:text-2xl phone:flex-col phone:w-screen">
          <h2 className="self-center ml-16 phone:ml-0 phone:mt-4">Recording</h2>
          <img src={tag3Image} alt="tag3 image" className="w-2/3 h-64 phone:self-center phone:w-screen" />
        </div>
      </section>
      <div className="spacer background1"></div>
      {/**spacer */}
      <section className="flex flex-col gap-16 bg-black">
        <h2 className="text-left">FEED<hr className="border-[#F4A30B]"/></h2>
        
        <div className="flex flex-row gap-8 phone:flex-col">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="self-center ml-8 pb-16 w-1/2 phone:ml-0 phone:pb-0 phone:w-screen"
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/CtYuE7RuBir/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={450}
            />
          </div>
          <article className="flex flex-col w-1/2 overflow-clip phone:w-screen">
            <p className="text-[#F4A30B] self-start typewriter phone:text-3xl">////////   ////////    </p>
            
          <p className="mt-8 mb-8 phone:text-lg">
          {<PortableText value={welcomeMessage.body}/>}
          </p>
          <p className="text-secondary self-end phone:text-3xl">                       //_ _</p>
          </article>
          
        </div>
      </section>
      <div className="spacer background1"></div>
      {/**spacer */}
      <div className="bg-black flex h-auto flex-grow justify-center p-8 phone:flex-col">
        <section 
          
          className={`flex h-auto flex-row justify-between w-3/4 outline outline-white p-16 gap-16 background1 phone:flex-col phone:p-4 phone:self-center phone:w-full phone:items-center`}
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
            <div className="text-xs mt-4 phone:ml-3">
            <p>Email:</p>
             <span>cedricboudreaux@yahoo.com</span>
            <hr />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
