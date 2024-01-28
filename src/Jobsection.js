import React, { useEffect, useState } from "react";
import "./Feed.css";
// import TweetBox from './TweetBox'
// import Post from './Post'
import Job from "./Job";
import { db } from "./firebase";
import "./Jobsection.css";

const Jobsection = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    db.collection("jobs").onSnapshot((snapshot) =>
      setJobs(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="job-component">
      <h1 className="job_title"> %Job title% </h1>
      <div className="jobsection">
        {/* Header */}
        {/* <div className="feed_header">
      <h2>Home</h2>
      </div> */}
        {jobs.map((job) => (
          <Job
            displayName={job.displayName}
            userName={job.username}
            verified={job.verified}
            text={job.text}
            avatar={job.avatar}
            image={job.image}
            location={job.location}
            salary={job.salary}
            type={job.type}
            title={job.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobsection;
