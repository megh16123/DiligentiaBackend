import React from 'react'
import './Searchpage.css'
import { Avatar } from '@material-ui/core'
import { CheckCircleOutlineOutlined } from '@material-ui/icons'
function ChannelRow({ channel, image, verified, subs, noofvideos, description }) {
    return (
        <div className="channelrow">
            <Avatar className="channel-logo" alt={channel} src={image} />
            <div className="channel-text">
                <h4>{channel}{verified &&<CheckCircleOutlineOutlined/>}</h4>
                <p>{subs} subscribers . {noofvideos} videos</p>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default ChannelRow
