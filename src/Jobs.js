import React from 'react'
import Sidebar from './Sidebar';
// import Feed from './Feed';
import Widgets from './Widgets';
import './Dashboard.css';
// import './App.css';
import Jobsection from './Jobsection'

const Jobs = () => {
  return (
    <div className="app j-app">
      {/* <h2>This is home</h2> */}
      {/* <Sidebar />, <Feed />, <Widgets /> */}
      <Sidebar />

      <Jobsection />


      {/* <Widgets /> */}
    </div>
  )
}

export default Jobs
