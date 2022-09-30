import React from 'react'


const Footer = () => {
  return (
    <div className='h-auto  mx-auto footer'>
        <ul className='flex items-center justify-center text-center socials'>
            <li><a target='_blank' rel='noreferrer' href="https://github.com/Banzyworld"><i class="fa-brands fa-github"></i></a></li>
            <li><a target='_blank' rel='noreferrer'  href="https://www.linkedin.com/in/banzyworld"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a target='_blank' rel='noreferrer'  href="mailto:segunalofun@protonmail.com"><i class="fas fa-envelope"></i></a></li>
        </ul>
        <hr className="text-gray-600" />
        <span className='text-gray-400 flex items-center justify-center text-center p-2 '>
          <i class="fas fa-copyright"></i> &nbsp;  2022 Banzyworld Dev. All Rights Reserved. 
        </span>
    </div>
  )
}

export default Footer