import React from "react";
import JobCategoryItem from "./JobCategoryItem";

const JobCategory = ({ categoryData }) => {
  return (
    <div className="my-5">
      <div className="text-center">
        <h2 className="text-3xl my-3 font-bold">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:grid gap-10 m-7 grid-cols-4">
        {categoryData.map((job) => (
          <JobCategoryItem key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobCategory;