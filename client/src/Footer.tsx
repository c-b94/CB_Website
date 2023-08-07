import React from 'react'
import {Link} from "react-router-dom"
import soc1 from "./assets/LI-Logo.png"
import soc2 from "./assets/118541-logo-instagram-png-download-free.png"
import soc3 from "./assets/pngwing.com.png"
export default function Footer() {
  return (
    <footer className="flex flex-row gap-16 align-center justify-center outline outline-4 outline-red-400">
      
      <a href="https://www.linkedin.com/in/cedricboudreaux"><img className="w-36 mt-8" src={soc1} alt="LinkedIn"></img></a>
      <a href="https://www.instagram.com/ced.b94/"><img className="w-24" src={soc2} alt="instagram"></img></a>
      <a href="https://github.com/c-b94"><img className="w-24 mt-8" src={soc3} alt="github"></img></a>
    </footer>
  )
}
