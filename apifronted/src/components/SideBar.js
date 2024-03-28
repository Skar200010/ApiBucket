import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen">
      <div className="justify-between items-center p-4 bg-gray-800 text-white">
        <button 
          onClick={toggleDrawer}
          className="text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 h-full fixed top-0 left-0 rounded-r-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-0 right-0 m-4 text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="flex items-center justify-center my-4">
          <img src='logo12.jpg' alt="Brand Logo" className=" h-8 " />
          <span className="text-lg font-bold">Skar Private ltd</span>
        </div>

        <ul className="p-4 mt-6">
          <li className="mb-2 p-2 hover:bg-gray-800 transition-transform transform hover:scale-110 hover:">
            <a href="/" className="block text-gray-300 hover:text-white">
              Home Page
            </a>
          </li>
          <li className="mb-2 p-2 hover:bg-gray-800 transition-transform transform hover:scale-110">
            <a href="#" className="block text-gray-300 hover:text-white">
              Item 2
            </a>
          </li>
          <li className="mb-2 p-2 hover:bg-gray-800 transition-transform transform hover:scale-110">
            <a href="#" className="block text-gray-300 hover:text-white">
              Item 3
            </a>
          </li>
        </ul>
      </div>
      {/* Content */}
    </div>
  );
};

export default SideBar;
