import React from 'react'
import './SidebarOption.css'
import home_icon from './Assets/home.png'

const SidebarOption = ({ active, text, icon }) => {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption_active'}`}>
            <img className='sidebaricons' width={'25px'} src={icon} alt="" />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption