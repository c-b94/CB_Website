
import logo from "../assets/logo.png"

import { useEffect} from "react";
export default function LoadingPage() {
    useEffect(()=>{
      const pageDiv = document.getElementById("overlay");
        if(pageDiv){
          pageDiv.classList.add("fade-out")  
            setInterval(()=>{
                pageDiv.remove()
            },2050)
          }
    },[])
   
  return (
    <div id="overlay">
      
        <div id="loadingIcon"className="phone:top-1/2 phone:left-1/2">
            <img src={logo} 
            alt="logo" />
        </div>

    </div>
  )
}
