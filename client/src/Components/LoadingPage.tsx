import React from 'react'
import { useState, useEffect } from 'react';
import logo from "/home/cb-code/projects/CB-Website/client/src/assets/logo.png"
export default function LoadingPage() {
    
    window.onload = (e) =>{
        const pageDiv = document.getElementById("overlay");
        pageDiv.classList.add("fade-out")
        
        setInterval(()=>{
            pageDiv.remove()
        },1050)
    }
  return (
    <div id="overlay">

        <div id="loadingIcon">
            <img src={logo} 
            alt="logo" />
        </div>

    </div>
  )
}
