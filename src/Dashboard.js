import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './Dashboard.css';
import GoToTopButton from '../src/components/Button/GoToTopButton'; // Import the GoToTopButton component
// import './App.css';


const Home = () => {
  return (
    <div className="app">
      <Sidebar /> <Feed /> <Widgets />
      <GoToTopButton /> {/* Use the GoToTopButton component here */}
    </div>
    
  )
}

export default Home
