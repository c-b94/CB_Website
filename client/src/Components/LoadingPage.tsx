
import logo from "../assets/logo.png"
export default function LoadingPage() {
    
    window.onload = () =>{
        const pageDiv = document.getElementById("overlay");
        if(pageDiv){
          pageDiv.classList.add("fade-out")  
            setInterval(()=>{
                pageDiv.remove()
            },1050)
        }
        
        
        
    }
   
  return (
    <div id="overlay">

        <div id="loadingIcon"className="phone:top-1/2 phone:left-1/2">
            <img src={logo} 
            alt="logo" />
        </div>

    </div>
  )
}
