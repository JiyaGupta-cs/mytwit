import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption.js'
import logo from './Assets/BeyondBarriers.png'
import home_icon from './Assets/home.png'
import { Link } from 'react-router-dom'
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
      <Link to='/' className='mylink'> <img className='sidebar_twit_icon' width={'100px'} src={logo} alt="" /></Link>
      <div className='sidebar-links'>
        {/* Sidebar Options */}
        {/* <Link to='/' className='mylink'><SidebarOption active={true} text="Home" icon={home_icon} /></Link> */}
        <Link to='/' className='mylink'><SidebarOption text="Explore" icon={"https://cdn-icons-png.flaticon.com/512/61/61088.png"} /></Link>
        <Link to='/events' className='mylink'><SidebarOption text="Events" icon={"https://cdn-icons-png.flaticon.com/512/3995/3995725.png"} /></Link>
        <Link to='/resources' className='mylink'><SidebarOption text="Resources" icon={"https://cdn-icons-png.flaticon.com/512/751/751432.png"} /></Link>
        {/* <SidebarOption text="Messages" icon={home_icon}/> */}
        <Link to='/jobs' className='mylink'><SidebarOption text="Job Mela" icon={"https://icon-library.com/images/jobs-icon-png/jobs-icon-png-18.jpg"} /></Link>

        <Link className='mylink' to='/donate'><SidebarOption text="Donate" icon={"https://cdn-icons-png.flaticon.com/512/176/176696.png"} /></Link>
        {/* <SidebarOption text="Profile" icon={home_icon}/> */}

        <Link className='mylink' style={{cursor:'pointer'}} to='/'> <button className='sidebar_tweet'>Post</button></Link>

        {/* <Link to='/jobs'><SidebarOption text="Messages" icon={home_icon} /></Link> */}
      </div>
    </div>
  )
}

export default Sidebar
