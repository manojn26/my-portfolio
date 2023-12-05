import React from 'react'
import "./TopNav.css"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function TopNav() {
    return (
        <>
            <div className='top-nav'>
                <div className='mac-book'>
                    <div className='red circle'></div>
                    <div className='yellow circle'></div>
                    <div className='green circle'></div>
                </div>
                <div className='my-resume'>
                    <a href="https://drive.google.com/file/d/10YOZfRGVxiS45PFG8eKwXSfKPQvjsoFT/view?usp=sharing" rel="noreferrer" target="_blank">

                        <button> <CloudDownloadIcon className='download' /> Resume</button>
                    </a>
                </div>
            </div>
        </>
    )
}
