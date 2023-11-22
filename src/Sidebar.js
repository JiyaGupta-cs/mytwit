import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption.js'
import home_icon from './Assets/home.png'
// import twit_icon from './Assets/home.png'
// import search_icon from './Assets/home.png'
// import notifications_icon from './Assets/home.png'
// import mailoutline_icon from './Assets/home.png'
// import bookmarkborder_icon from './Assets/home.png'
// import listalt_icon from './Assets/home.png'
// import permidentity_icon from './Assets/home.png'
// import morehoriz_icon from './Assets/home.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Twitter icon */}

      {/* Sidebar Options */}
      <SidebarOption active={true} text="Home" icon={home_icon}/>
      <SidebarOption text="Explore" icon={home_icon}/>
      <SidebarOption text="Notification" icon={home_icon}/>
      <SidebarOption text="Messages" icon={home_icon}/>
      <SidebarOption text="Home" icon={home_icon}/>
      <SidebarOption text="Home" icon={home_icon}/>
      
      <button className='sidebar_tweet'>Tweet</button>
    </div>
  )
}

export default Sidebar
