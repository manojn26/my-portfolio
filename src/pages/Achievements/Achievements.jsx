import React from 'react'
import "./Achievements.css"
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function Acheivements() {
    return (
        <>
            <h1>Achievements</h1>
            <div className='achievement-wrapper'>


                <div className='achievement-container'>
                    <div className='achievement-image'>
                        <img className='image' src='https://hacktoberfest-swag.com/assets/hacktoberfest-logo.png' alt='error' />
                    </div>
                    <div className='achievement-content'>
                        <p className='achievement-heading'>Hacktober Fest 2023 </p>
                        <p className='achievement-point'>  <RadioButtonCheckedIcon className='achievement-radio' /> <p></p>Successfully Contributing to 4 open source projects</p>
                    </div>
                </div>

                <div className='achievement-container'>
                    <div className='achievement-image'>
                        <img className='image' src='https://s3-ap-southeast-1.amazonaws.com/ghost-production-blog/2022/10/Scaler_Logo_WhiteBG.jpg' alt='error' />
                    </div>
                    <div className='achievement-content'>
                        <p className='achievement-heading'>Scaler HackX Hackathon</p>
                        <p className='achievement-point'>  <RadioButtonCheckedIcon className='achievement-radio' /> Completed Online hackathon within stipulated time period</p>
                    </div>
                </div>

                <div className='achievement-container'>
                    <div className='achievement-image'>
                        <img className='image' src='https://mite.ac.in/wp-content/uploads/2020/01/nptel-mite.jpg' alt='error' />
                    </div>
                    <div className='achievement-content'>
                        <p className='achievement-heading'>NPTEL : Python Certification</p>
                        <p className='achievement-point'>  <RadioButtonCheckedIcon className='achievement-radio' /> Completed Online Python Certification and Recieves Elite Certification</p>
                    </div>
                </div>


            </div>
        </>
    )
}
