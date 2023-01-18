import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Footer = () => {
  
  const footerLargeScreen = () => {
    return (
       <div className='h-auto  mx-auto footer hidden md:block lg:block'>
        <ul className='flex items-even justify-center text-center socials'>
            {/* <li><a target='_blank' rel='noreferrer' href="https://github.com/Banzyworld"><i class="fa-brands fa-github"></i></a></li>
            <li><a target='_blank' rel='noreferrer'  href="https://www.linkedin.com/in/banzyworld"><i class="fa-brands fa-linkedin"></i></a></li>
             <li><a target='_blank' rel='noreferrer'  href="https://www.twitter.com/banzyworld"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a target='_blank' rel='noreferrer'  href="mailto:segunalofun@protonmail.com"><i class="fas fa-envelope"></i></a></li> */}
        <TwitterIcon  link="https://www.twitter.com/banzyworld" target={'_blank'} />
        <GitHubIcon link="https://github.com/Banzyworld" target={'_blank'}/>
        <LinkedInIcon link="https://www.linkedin.com/in/banzyworld" target={'_blank'}/>
        <ContactMailIcon link="mailto:segunalofun@protonmail.com" target={'_blank'}/>
        </ul>
        <hr className="text-gray-600" />
        <span className='text-gray-400 flex items-center justify-center text-center p-2 '>
          <i class="fas fa-copyright"></i> &nbsp;  2022 Banzyworld Dev. All Rights Reserved. 
        </span>
       
    </div>
    ) 
  }
     const footerMobileScreen = () => {
      return (
         <div className='h-auto  mx-auto footer sm:block md:hidden lg:hidden'>
        <ul className='flex items-center justify-center text-center socials'>
            {/* <li><a target='_blank' rel='noreferrer' href="https://github.com/Banzyworld"><i class="fa-brands fa-github"></i></a></li>
            <li><a target='_blank' rel='noreferrer'  href="https://www.linkedin.com/in/banzyworld"><i class="fa-brands fa-linkedin"></i></a></li>
             <li><a target='_blank' rel='noreferrer'  href="https://www.twitter.com/banzyworld"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a target='_blank' rel='noreferrer'  href="mailto:segunalofun@protonmail.com"><i class="fas fa-envelope"></i></a></li> */}
        <TwitterIcon  link="https://www.twitter.com/banzyworld" target={'_blank'} />
        <GitHubIcon link="https://github.com/Banzyworld" target={'_blank'}/>
        <LinkedInIcon link="https://www.linkedin.com/in/banzyworld" target={'_blank'}/>
        <ContactMailIcon link="mailto:segunalofun@protonmail.com" target={'_blank'}/>
        </ul>
        {/* <hr className="text-gray-600" /> */}
        <span className='text-gray-400 flex items-center justify-center text-center p-2 '>
          <i class="fas fa-copyright"></i> &nbsp;  2022 Banzyworld Dev. All Rights Reserved. 
        </span>
       
    </div>
      )
    }
  return (
    <div>
   {footerLargeScreen()}
   {footerMobileScreen()}
   </div>
  )
}

export default Footer

