import React from "react";
import { IoMdSearch } from "react-icons/io";
import Searchbar from "@/app/components/search/searchbar";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-10 py-5 border-b border-gray-200">
        <div className="flex items-center space-x-6"> 
        <h1 className="text-3xl font-bold">BelajarKuy</h1>
        <div className="flex items-center justify-center border border-gray-300 rounded-lg p-2 group">
            <Searchbar type="text" placeholder="Search" className=" focus:outline-none "/>
            <IoMdSearch className="text-2xl "/>
        </div>
        </div>

        <div className="flex items-center space-x-4">
          <a href="/pages/register">
            <button className="px-4 py-2 bg-orange-100 text-orange-600 rounded-md">Create account</button>
          </a>
          <a href="/pages/login">
            <button className="px-4 py-2 bg-orange-600 text-white rounded-md">
              Sign In
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
