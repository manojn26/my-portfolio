import React from 'react'
import "./Projects.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <div className='project-wrapper'>


                <div className='project-container'>

                    <div className='project'>
                        <img className='project-image' src='https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg' alt='not' />
                        <div className='project-text'>

                            <p>E-Shopping <a href='"'><GitHubIcon /></a> <LaunchIcon /> </p>
                        </div>
                    </div>

                    <div className='project'>
                        <img className='project-image' src='https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049567.jpg' alt='not' />
                        <div className='project-text'>

                            <p>Youtube Clone <a href='"'><GitHubIcon /></a> <LaunchIcon />  </p>
                        </div>
                    </div>

                    <div className='project'>
                        <img className='project-image' src='https://img.freepik.com/free-vector/gradient-ssl-illustration_23-2149247155.jpg' alt='not' />
                        <div className='project-text'>

                            <p>User Authentication <a href='"'><GitHubIcon /></a> <LaunchIcon />  </p>
                        </div>
                    </div>
                </div>

                <div className='project-container'>

                    <div className='project'>
                        <img className='project-image' src='https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg' alt='not' />
                        <div className='project-text'>

                            <p>Hotel Booking <a href='"'><GitHubIcon /></a> <LaunchIcon />  </p>
                        </div>
                    </div>

                    <div className='project'>
                        <img className='project-image' src='https://img.freepik.com/free-photo/young-woman-eating-croissants-cafe_1303-20408.jpg' alt='not' />
                        <div className='project-text'>

                            <p>Smart Cafe System <a href='"'><GitHubIcon /></a> <LaunchIcon />  </p>
                        </div>
                    </div>

                    <div className='project'>
                        <img className='project-image' src='https://img.freepik.com/free-photo/photo-female-office-worker-sitting-desk-with-laptop-clipboard-high-quality-photo_2831-9652.jpg' alt='not' />
                        <div className='project-text'>

                            <p>Excuse Generator <a href='"'><GitHubIcon /></a> <LaunchIcon />  </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
