import React from 'react'
import './Sidebar.css'

function SidebarRow({Icon,title,selected}) {
    return (
        <div className={`SidebarRow ${selected && "selected" }`}>
            <Icon className="sidebarRow-icon"/>
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default SidebarRow
