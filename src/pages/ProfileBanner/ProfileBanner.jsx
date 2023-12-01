import React from 'react'
import profile from "./profile-pic.png"
import "./ProfileBanner.css"


export default function ProfileBanner() {
    return (
        <>
            <div className='image-banner'>
                <div>
                    <img className='my-photo' src={profile} alt='banner' />
                </div>
                <div className='name-container'>
                    <div className='my-name'>
                        @ Manoj Kumar N
                    </div>
                    <div className='job-title'>
                        Full Stack Developer
                    </div>
                    <a href='mailto:manojcsengineer@gmail.com'>

                        <div className='hire-me'>
                            <button className='hire-button'>Hire Me</button>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
