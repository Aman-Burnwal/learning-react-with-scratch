import React from 'react'
import "./Video.css"

const Video = ({ title, channel, views, time, verified = false}) => {


    return (
        <div className='container'>
            <div className="pic">
                <img src='https://source.unsplash.com/random/100x100?sig=2' alt='' />
            </div>
            <div className='title'>{title}</div>
            <div className='channel'>{channel} {verified ? '✅' : null }</div> 
            <div className='views'>{views} views<span>.</span>{time}</div>
        </div>
    )
}

export default Video