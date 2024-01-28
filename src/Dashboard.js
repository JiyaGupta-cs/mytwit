import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./Dashboard.css";

// import './App.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="app">
      {showSideBar === true ? <Sidebar /> : ""}
      <Feed
        searchQuery={searchQuery}
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
      />
      <Widgets searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default Home;
