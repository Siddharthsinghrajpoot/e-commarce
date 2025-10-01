import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { context } from "../context/ShopContext";

const Navbar = () => {
const {display}=useContext(context);

  const [isOpen, setIsOpen] = useState(false);
  const {setShowSearch}=useContext(context);

  return (
    <nav className="bg-white shadow-md px-4 sm:px-14 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">e-commarce</div>

        {/* Menu toggle button (mobile only) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`flex-col sm:flex sm:flex-row sm:items-center sm:space-x-6 gap-2 sm:gap-0 absolute sm:static top-16 left-0 w-auto sm:w-auto bg-white sm:bg-transparent transition-all duration-300 ease-in ${
            isOpen ? "block" : "hidden sm:flex"
          }`}
        >
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-gray-800 hover:text-gray-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/collection"
              className="block px-4 py-2 text-gray-800 hover:text-gray-600"
            >
              COLLECTION
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="block px-4 py-2 text-gray-800 hover:text-gray-600"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-800 hover:text-gray-600"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <CiSearch size={25} className="cursor-pointer" onClick={()=>{ setShowSearch(true)  }} />
          <CiUser size={25}className="cursor-pointer" />
          <div className="relative inline-block" >
          <IoBagOutline size={25} className="cursor-pointer"/>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {display()}
        </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
