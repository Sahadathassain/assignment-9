import { useEffect, useState } from "react";
import Dream from "../Dream/Dream";
import JobCategory from "../JobCategory/JobCategory";
import Jobs from "../Jobs/jobs";

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
        <Jobs jobsData={jobsData}></Jobs>
      </div>
    );
  };
  
  export default Home;