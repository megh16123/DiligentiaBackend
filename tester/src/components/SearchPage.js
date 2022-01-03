import React from 'react'
import './Searchpage.css'
import { TuneOutlined } from '@material-ui/icons'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import { ExternalLink } from 'react-external-link';
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="search-filter">
            <TuneOutlined />
            <ExternalLink href="https://www.youtube.com/results?search_query=external+link+in+react+js">
            <h2>FILTER</h2> 
            </ExternalLink>
            </div>
            <hr />
            <ChannelRow 
            image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj"
            channel="Clever Programmer "
            verfied
            subs="100k"
            noofvideos={615}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."/>
            <hr/>

            <VideoRow
            views="1 Mil"
            subs="1Mil"
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            timestamp="1"
            channel="Clever Programmer "
            title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
            image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjmb1zYx9ZOnDhZa-vwpyBLV9BjQ"/>
            <VideoRow
            views="1 Mil"
            subs="1Mil"
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            timestamp="1"
            channel="Clever Programmer "
            title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
            image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjmb1zYx9ZOnDhZa-vwpyBLV9BjQ"/>
            <VideoRow
            views="1 Mil"
            subs="1Mil"
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            timestamp="1"
            channel="Clever Programmer "
            title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
            image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjmb1zYx9ZOnDhZa-vwpyBLV9BjQ"/>
            <VideoRow
            views="1 Mil"
            subs="1Mil"
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            timestamp="1"
            channel="Clever Programmer "
            title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
            image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjmb1zYx9ZOnDhZa-vwpyBLV9BjQ"/>
            <VideoRow
            views="1 Mil"
            subs="1Mil"
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            timestamp="1"
            channel="Clever Programmer "
            title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
            image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjmb1zYx9ZOnDhZa-vwpyBLV9BjQ"/>
            
        </div>
    )
}

export default SearchPage
