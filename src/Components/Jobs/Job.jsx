import React, { useState } from "react";
import JobCart from "./JobCart";

const Job = ({ jobsData }) => {
  const [numDisplayed, setNumDisplayed] = useState(4);

  const handleShowAllJobs = () => {
    setNumDisplayed(jobsData.length);
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl my-3 font-bold">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        <div className="md:grid gap-10 m-7 grid-cols-2">
          {jobsData.slice(0, numDisplayed).map((job) => (
            <JobCart key={job.id} job={job}></JobCart>
          ))}
        </div>
        <div className="flex my-5 justify-center">
          {numDisplayed < jobsData.length && (
            <button className="btn" onClick={handleShowAllJobs}>
              See All Jobs
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;