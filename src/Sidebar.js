import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import SidebarOption from './SidebarOption.js';
import logo from './Assets/BeyondBarriers.png';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className='sidebar'>
      {/* Twit icon */}
      <Link to='/' className='mylink'>
        <img className='sidebar_twit_icon' width={'100px'} src={logo} alt="" />
      </Link>
      <div className='sidebar-links'>
        <Link to='/' className='mylink'>
          <SidebarOption text="Explore" icon={"https://cdn-icons-png.flaticon.com/512/61/61088.png"} active={isActive('/')} />
        </Link>
        <Link to='/events' className='mylink'>
          <SidebarOption text="Events" icon={"https://cdn-icons-png.flaticon.com/512/3995/3995725.png"} active={isActive('/events')} />
        </Link>
        <Link to='/resources' className='mylink'>
          <SidebarOption text="Resources" icon={"https://cdn-icons-png.flaticon.com/512/751/751432.png"} active={isActive('/resources')} />
        </Link>
        <Link to='/jobs' className='mylink'>
          <SidebarOption text="Job Mela" icon={"https://icon-library.com/images/jobs-icon-png/jobs-icon-png-18.jpg"} active={isActive('/jobs')} />
        </Link>
        <Link className='mylink' to='/donate'>
          <SidebarOption text="Donate" icon={"https://cdn-icons-png.flaticon.com/512/176/176696.png"} active={isActive('/donate')} />
        </Link>
        <Link className='mylink' style={{ cursor: 'pointer' }} to='/'>
          <button className='sidebar_tweet'>Post</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
