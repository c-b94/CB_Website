
import logo from "/home/cb-code/projects/CB-Website/client/src/assets/logo.png"
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
    console.log("loadingPage")
  return (
    <div id="overlay">

        <div id="loadingIcon"className="phone:top-1/2 phone:left-1/2">
            <img src={logo} 
            alt="logo" />
        </div>

    </div>
  )
}
