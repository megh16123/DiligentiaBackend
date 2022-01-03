import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import Homeicon from "@material-ui/icons/Home"
import Whatshoticon from "@material-ui/icons/Whatshot"
import Subscriptionsicon from "@material-ui/icons/Subscriptions"
import Videolib from "@material-ui/icons/VideoLibrary"
import History from "@material-ui/icons/History"
import Ondemand from "@material-ui/icons/OndemandVideo"
import Watchlater from "@material-ui/icons/WatchLater"
import ThumbUpAlt from "@material-ui/icons/ThumbDownAltOutlined"
import ExapndMoreOut from "@material-ui/icons/ExpandMoreOutlined"


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={Homeicon} title="Home"/>
            <SidebarRow Icon={Whatshoticon} title="Trending"/>
            <SidebarRow Icon={Subscriptionsicon} title="Subscription"/>
            <hr/>
            <SidebarRow selected Icon={Videolib} title="Library"/>
            <SidebarRow Icon={History} title="History"/>
            <SidebarRow Icon={Ondemand} title="Your Videos"/>
            <SidebarRow Icon={Watchlater} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpAlt} title="Liked Videos"/>
            <SidebarRow Icon={ExapndMoreOut} title="Show More"/>
            < hr/>
        </div>
    )
}

export default Sidebar
