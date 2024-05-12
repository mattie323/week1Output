import React from "react";
import { NavLink } from "react-router-dom";
import { MdNoteAlt } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="bg-red-500 border-b border-red-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <MdNoteAlt className="h-10 w-auto"  />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Note App
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className="bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/notes"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Notes
                </NavLink>
                <NavLink
                  to="/add-notes"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Add Notes
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
