import React from 'react'
import "./SideBar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaHashnode } from "react-icons/fa6";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function SideBar() {
    return (
        <>

            <div className='social-links'>
                <div title='Gmail'> <a href='mailto:manojcsengineer@gmail.com'><EmailIcon className='social-icons' /></a>  </div>
                <div title='Github'> <a href='https://github.com/manojn26' rel="noreferrer" target='_blank'><GitHubIcon className='social-icons' /></a>  </div>
                <div title="Twitter"> <a href='https://twitter.com/manoj_feb' rel="noreferrer" target='_blank'><TwitterIcon className='social-icons' /></a> </div>
                <div title='Blogs'> <a href='https://hashnode.com/@manojn26' rel="noreferrer" target='_blank'><FaHashnode className='hash-node social-icons' /></a> </div>
                <div title='LinkedIn'> <a href='https://www.linkedin.com/in/manojn26' rel="noreferrer" target='_blank'><LinkedInIcon className='social-icons' /></a> </div>
                <div title='Whatsapp'> <a href='https://api.whatsapp.com/send/?phone=+91 8056894608&text=Hi%20Manoj&type=phone_number&app_absent=0' rel="noreferrer" target='_blank'><WhatsAppIcon className='social-icons' /></a>   </div>

                <div title='Instagram'> <InstagramIcon className='social-icons' /> </div>
            </div>
        </>
    )
}
