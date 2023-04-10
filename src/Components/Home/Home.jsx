import React, { useState, useEffect } from "react";

import JobCategory from "../JobCategory/JobCategory";

import Dream from "../Dream/Dream";
import Job from "../Jobs/Job";




const Home = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoryResponse = await fetch("marketing.json");
      const jobsResponse = await fetch("features.json");
      const [categoryData, jobsData] = await Promise.all([
        categoryResponse.json(),
        jobsResponse.json(),
      ]);
      setCategoryData(categoryData);
      setJobsData(jobsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Dream></Dream>
      <JobCategory categoryData={categoryData}></JobCategory>
      <Job jobsData={jobsData}></Job>
    </div>
  );
};

export default Home;