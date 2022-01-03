import React from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const[inputSearch,setinput]=useState("")
    return (
        <div className="header">
            <div className="header-left">
            <MenuIcon/>
            <a href="https://mega.nz/folder/AxM3kCrK#B4tPWWxAGIT6mGvzE08InQ" target="_blank"> <Link to='/'><img className="header-logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-700x394.png" alt="" /></Link></a>
            </div>
            <div className="header-input">
            <input onChange={(e)=>{setinput(e.target.value)}} placeholder="Search" type="text" name="" value={inputSearch} id="" />
            <Link to={`/search/${setinput}`}> <SearchIcon className="inputbutton"/></Link>
            </div>
            <div className="header-icons">
            <VideoCallIcon className="header-icon"/>
            <AppsIcon className="header-icon"/>
            <NotificationsIcon className="header-icon"/>
            <Avatar src="https://yt3.ggpht.com/yti/APfAmoECneNlqZBTSP9LZY11mu-gxLQRml9MTev613BL-A=s88-c-k-c0x00ffffff-no-rj-mo"/>
            </div>
        </div>
    )
}

export default Header
