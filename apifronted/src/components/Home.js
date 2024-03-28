// src/components/HomePage.js

import React from "react";

const HomePage = () => {
  return (
    
      <div className="min-h-screen container mx-auto p-4 ">
        {/* Left side: Bucket Image */}

        {/* Right side: App Intro Card with Text Animation */}
        <div className="ml-4">
          <div className="flex items-center justify-center bg-white rounded-md p-6 shadow-md ">
            <h1 className="text-4xl font-bold mb-4 hover:text-gray-800">
              Welcome to API Bucket
            </h1>

            {/* Add text animation classes or libraries here if needed */}
          </div>

          <div className="content-conatiner grid grid-cols-2 divide-x">
            <img
              src="bucket1.png"
              alt="Bucket"
              className="h-80 w-80 mt-10 shadow hover:shadow-lg transition-transform transform hover:scale-110"
            />

            <div className="introduction mx-auto max-w-2xl bg-white rounded-md p-6 shadow-md mr-10 transition-transform transform hover:scale-110 mt-14">
              <h1 className="flex items-center justify-center text-4xl font-bold mb-4 hover:text-gray-800">
                Introduction
              </h1>
              <p className="flex items-center justify-center text-gray-600 p-5">
                A centralized hub for managing and sharing API code snippets.
                Streamline your development process with API Bucket!
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default HomePage;
