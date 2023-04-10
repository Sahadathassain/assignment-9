import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const JobCart = ({ job }) => {
  const navigate = useNavigate();
  const {
    id,
    company_logo,
    company_name,
    fulltime_or_partTime,
    job_title,
    salary,
    location,
    remote_or_onsite,
  } = job;
  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 my-3 p-5 rounded-md">
      <img className="w-50  h-20" src={company_logo} alt="" />
      <h2 className="text-2xl font-semibold">{job_title}</h2>
      <h4 className="text-xl">{company_name}</h4>
      <div className="inline-flex mt-2 gap-5">
        <p className="border-2 border-blue-600 text-blue-900 px-2">
          {remote_or_onsite}
        </p>
        <p className="border-2 border-blue-600 text-blue-600 px-2">
          {fulltime_or_partTime}
        </p>
      </div>
      <div className="flex gap-4 my-4">
        <p className="inline-flex gap-2">
          <MapPinIcon className="h-7 w-6" /> {location}
        </p>
        <p className="inline-flex gap-2">
          <CurrencyDollarIcon className="h-7 w-6" /> {salary}
        </p>
      </div>
      {/* <button
        className="btn"
        onClick={() => navigate(/jobs/${job.id}, { state: job })}>
        View Details
      </button> */}
    </div>
  );
};

export default JobCart;