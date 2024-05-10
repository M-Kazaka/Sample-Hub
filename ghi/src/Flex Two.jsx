import React from 'react'
import myVideo from './assets/Test1.mp4'

function FlexTwo () {
    return (
        <>
            <div className="App1">
                <video autoPlay muted loop className='fullscreen-video'>
                    <source src={myVideo} type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>
                <h5 className="video-caption">
                    Test page to flex on later
                </h5>
            </div>
        </>
    )
}

export default FlexTwo