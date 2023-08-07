import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './Components/About'
import Music from './Components/Music'
import {Route,Routes} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <body className="outline outline-4 outline-purple">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/music" element={<Music/>}/>
      </Routes>
      <Footer/>
    </body>
  )
}

export default App
