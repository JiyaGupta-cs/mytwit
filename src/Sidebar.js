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
      {/* Twit icon */}
      <img className='sidebar_twit_icon' width={'25px'} src={home_icon} alt="" />

      {/* Sidebar Options */}
      <SidebarOption active={true} text="Home" icon={home_icon}/>
      <SidebarOption text="Explore" icon={"https://cdn-icons-png.flaticon.com/512/61/61088.png"}/>
      <SidebarOption text="Events" icon={"https://cdn-icons-png.flaticon.com/512/3995/3995725.png"}/>
      <SidebarOption text="Resources" icon={"https://cdn-icons-png.flaticon.com/512/751/751432.png"}/>
      {/* <SidebarOption text="Messages" icon={home_icon}/> */}
      <SidebarOption text="Job Mela" icon={"https://icon-library.com/images/jobs-icon-png/jobs-icon-png-18.jpg"}/>
      <SidebarOption text="Donate" icon={"https://cdn-icons-png.flaticon.com/512/176/176696.png"}/>
      {/* <SidebarOption text="Profile" icon={home_icon}/> */}

      <button className='sidebar_tweet'>Tweet</button>
    </div>
  )
}

export default Sidebar
