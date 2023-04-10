import React from "react";

const JobCategoryItem = ({ job }) => {
  const { logo, jobsAvailable, name } = job;
  return (
    <div className="p-6 my-3 rounded-md bg-indigo-100">
      <img className="w-50  h-20" src={logo} alt="" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>{jobsAvailable}</p>
    </div>
  );
};

export default JobCategoryItem;

