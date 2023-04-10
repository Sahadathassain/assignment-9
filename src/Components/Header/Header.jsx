import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-to-r from-green-100 via-lime-100 to-transparent px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <BriefcaseIcon className="h-8 w-6 text-emerald-500" />
          <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800">
            Marketing Agency
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="bg-gradient-to-r hidden md:block from-orange-600 to-pink-600 text-black rounded-lg p-3 font-bold">
          <button>Star Applying</button>
        </div>
       

        {/* Mobile Navbar Section */}
        <div className="md:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}>
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <BriefcaseIcon className="h-6 w-6 text-emerald-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                       Marketing Agency
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}>
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="flex justify-between">
                    <div className="space-y-4">
                      <li>
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/statistics"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
                          Statistics
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/jobs"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
                          Applied Jobs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400">
                          Blog
                        </Link>
                      </li>
                    </div>
                    <div className="bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-lg px-3  flex justify-center items-center font-bold">
                      <button>Star Applying</button>
                    </div>
                  </ul>
                </nav>

              

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;