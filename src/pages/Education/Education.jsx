import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./Education.css"

export default function Education() {
    return (
        <>
            <h1>Education</h1>
            <div className='education'>
                <div className='course-name'> <SchoolIcon /> M.Sc Computer Sceince <span>October 2021 - May 2023</span>  </div>
                <p className='college-name'>Government Arts and Science College</p>
                <p className='location'> <LocationOnIcon /> Hosur, Tamil Nadu</p>
                <p className='cgpa'>CGPA : 8.2</p>
                <div className='relavant-coursework'>
                    <p>Relavant Coursework :</p>
                    <div className='relavant-courses'>

                        <div>
                            <p>Data structures & Algorithms</p>
                            <p>Data Mining</p>
                            <p>Advanced Computer Networks</p>
                        </div>
                        <div>
                            <p>Machine Learning</p>
                            <p>Artificial Intelisense</p>
                            <p>Analysis of Algorithms</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
