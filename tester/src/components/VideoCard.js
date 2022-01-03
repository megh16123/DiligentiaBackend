import React from 'react'
import './Videos.css'
import Avatar from '@material-ui/core/Avatar'
function VideoCard({title,image,channel,views,timestamp,channelImage}) {
    return (
        <div className="videocard">
            <img className="videocard-image" src={image} alt=""/>
            <div className="video-info">
                <Avatar className="Videocard-avatar" alt={channel} src={channelImage}/>
                <div className="video-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timestamp}</p>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCard
