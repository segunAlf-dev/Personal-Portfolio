import React from 'react'
import './Home.css';


const Home = () => {
  
  return (
      <div className='container hidden md:block lg:block' >
         <div className='Intro_Text mt-[140px]'> <h1> Hello👋,<br /> <span>I'm</span> Segun <span> Alofun</span> - Curious <br/>  designer and developer <br />based in Lagos Nigeria.<br/>
          </h1>
       
         </div>     
       
        {/* Social Links */}
           <div className='social-links mt-6'>
          <ul>
            <li className=''>
              <a className='' href="https://www.linkedin.com/in/banzyworld/" target={"_self"}>Linkedin </a>
            </li>
             <li className=''>
              <a className='' href="https://github.com/Banzyworld" target={"_self"}>Github</a>
            </li>
              <li className=''>
              <a className='' href="https://twitter.com/Banzyworld" target={"_self"}>Twitter</a>
            </li>
             <li className=''>
              <a className='' href="mailto:segunalofun@protonmail.com" target={"_self"}>Email</a>
            </li>
                
          </ul>
        </div>

    
    </div>
  )
}

export default Home