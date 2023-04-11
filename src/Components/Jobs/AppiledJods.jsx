import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AppliedJobs = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  console.log(data);

  const [filterCategory, setFilterCategory] = useState(data);
  const filterByRemote = data.filter(
    (remote) => remote.remote_or_onsite == "Remote"
  );
  const filterByOnsite = data.filter(
    (onsite) => onsite.remote_or_onsite == "Onsite"
  );

  return (
    <div>
      <div>
        <div className="text-end mx-10 my-6">
          <button
            onClick={() => setFilterCategory(filterByRemote)}
            className="btn me-4">
            Filter Remote
          </button>
          <button
            onClick={() => setFilterCategory(filterByOnsite)}
            className="btn">
            Filter Online
          </button>
        </div>
        {filterCategory &&
          filterCategory.map((singleJob) => (
            <div key={singleJob.id}>
              <div className="mx-4 my-5">
                <div className="md:flex p-4 rounded-md bg-gradient-to-r bg-lime-400 justify-between">
                  <div className="md:inline-flex gap-8">
                    <img
                      className="w-40 h-40"
                      src={singleJob.company_logo}
                      alt=""
                    />
                    <div>
                      <h3 className="text-2xl font-bold">
                        {singleJob.job_title}
                      </h3>
                      <h4 className="text-xl font-semibold">
                        {singleJob.company_name}
                      </h4>
                      <div className="inline-flex mt-2 gap-5">
                        <p className="border-2 border-blue-400 text-blue-400 px-2">
                          {singleJob.remote_or_onsite}
                        </p>
                        <p className="border-2 border-blue-400 text-blue-400 px-2">
                          {singleJob.fulltime_or_partTime}
                        </p>
                      </div>
                      <div className="flex gap-4 my-4">
                        <p className="inline-flex gap-2">
                          <MapPinIcon className="h-7 w-6" />{" "}
                          {singleJob.location}
                        </p>
                        <p className="inline-flex gap-2">
                          <CurrencyDollarIcon className="h-7 w-6" />{" "}
                          {singleJob.salary}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="btn"
                      onClick={() =>
                        navigate('/jobs/${singleJob.id}', { state: singleJob })
                      }>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AppliedJobs;