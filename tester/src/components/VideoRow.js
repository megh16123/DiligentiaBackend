import React from 'react'
import './Searchpage.css'
function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videorow">
            <img src={image} alt="" />
            <div className="videorow-text">
             
                <h3>{title}</h3>
                
                <p className="headline">{channel} . <span className="subsinfo">
                <span className="video-subs">{subs}</span>  Subscribers {views} views . {timestamp}
                    </span> 
                    </p>
                <p className="desc">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
