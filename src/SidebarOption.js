import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({ active, text, icon }) => {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption_active'}`}>
            <img className='sidebaricons' width={'25px'} src={icon} alt="" />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption