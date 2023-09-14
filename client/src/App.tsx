import { useEffect, useState } from 'react'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import About from './Components/About'
import Music from './Components/Music'
import {Route,Routes,useLocation} from 'react-router-dom'
import LoadingPage from './Components/LoadingPage'
import './App.css'


function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [loadingSCREEN,setLoadingSCREEN] = useState("")
  let location = useLocation();

  useEffect(()=>{
   
    async function loading(){
      const html = <LoadingPage/>
      setLoadingSCREEN(html)
    }
    
    loading();
  },[location])


  return (
    <body id="page" className="outline outline-4 outline-purple phone:w-screen">
      {loadingSCREEN}
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
