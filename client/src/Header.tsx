import React from 'react'
import { Link } from 'react-router-dom'
import headerImage from "./assets/headerstyle.png"

export default function Header() {

  return (
    <header className="font-mono justify-between top-0 place-items-start outline outline-4 outline-purple overflow-hidden">
        <div className="flex flex-row">
        <img className="w-40 mt-0" src={headerImage} alt="icon" />
        <h1 className="mt-6">CB_WORKS</h1>
        </div>
       
        <nav className="flex justify-between gap-8 p-4 mt-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/about" className="text-white">about</Link>
        <Link to="/music" className="text-white">music</Link>
        {/* <Link to="/services" className="text-white">services</Link> */}
        
        </nav>
        
    </header>
  )
}
