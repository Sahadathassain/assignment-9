import React from "react";
import { useLocation } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../utilities/fakedb";


const ViewDetails = () => {
  const locations = useLocation();
  const job = locations.state;
  const {
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
    location,
  } = job;

  return (
    <div className="md:flex my-container gap-2">
      <div className="md:w-2/3 m-3 md:m-0 bg-gray-100 rounded-md p-4">
        <h3 className="text-xl my-3 font-bold">
          Job Description:
          <span className="font-normal text-base"> {job_description}</span>
        </h3>
        <h3 className="text-xl my-3 font-bold">
          Job Responsibility:
          <span className="font-normal text-base"> {job_responsibility}</span>
        </h3>
        <h3 className="text-xl my-3 font-bold">
          Educational Requirements:
          <br />
          <span className="font-normal text-base">
            {educational_requirements}
          </span>
        </h3>
        <h3 className="text-xl my-3 font-bold">
          Experiences:
          <br />
          <span className="font-normal text-base">{experiences}</span>
        </h3>
      </div>
      <div className="md:w-1/3 m-3 md:m-0">
        <div className="bg-indigo-100  p-4 rounded-md">
          <h2 className="text-lg font-bold pb-3 border-b border-blue-400 my-4">
            Job Details
          </h2>
          <div className="inline-flex gap-2 my-2">
            <CurrencyDollarIcon className="h-6 text-indigo-500 w-6" />
            <h4 className="font-semibold">
              Salary : <span className="font-normal">{salary}</span>
            </h4>
          </div>
          <div className="inline-flex gap-2 my-2">
            <BriefcaseIcon className="h-6 text-indigo-500 w-6" />
            <h4 className="font-semibold">
              Job Title : <span className="font-normal">{job_title}</span>
            </h4>
          </div>
          <h2 className="text-lg font-bold pb-3 border-b border-blue-400 my-4">
            Contact Information
          </h2>
          <div className="inline-flex gap-2 my-2">
            <PhoneIcon className="h-6 text-indigo-500 w-6" />
            <h4 className="font-semibold">
              Phone :
              <span className="font-normal"> {contact_information.phone}</span>
            </h4>
          </div>
          <div className="inline-flex gap-2 my-2">
            <EnvelopeIcon className="h-6 text-indigo-500 w-6" />
            <h4 className="font-semibold">
              Email :
              <span className="font-normal"> {contact_information.email}</span>
            </h4>
          </div>
          <div className="inline-flex gap-2 my-2">
            <MapPinIcon className="h-6 text-indigo-500 w-6" />
            <h4 className="font-semibold">
              Address :<span className="font-normal"> {location}</span>
            </h4>
          </div>
        </div>
        <button
          onClick={() => addToDb(id)}
          className="w-full mx-auto shadow-md my-3 bg-blue-400 hover:bg-blue-500 bg-gradient-to-r  from-indigo-400 to-purple-600 text-white rounded-lg p-3 font-bold">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;