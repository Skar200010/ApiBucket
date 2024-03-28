import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const DocumentationPage = () => {
    return (
      <div className="min-h-screen flex">
        <div className="bg-gray-600 text-white p-4 w-1/6">
        <ul className="space-y-2">
  <li className="mb-2 p-2">
    <Link
      to="#overview"
      className="text-white hover:text-gray-300 cursor-pointer transition duration-300 flex "
    >
      Overview
    </Link>
  </li>
  <li className="mb-2 p-2 ">
    <Link
      to="#requirements"
      className="text-white hover:text-gray-300 cursor-pointer transition duration-300 flex"
    >
      Requirements
    </Link>
  </li>
  <li className="mb-2 p-2">
    <Link
      to="#installation"
      className="text-white hover:text-gray-300 cursor-pointer transition duration-300 flex"
    >
      Installation
    </Link>
  </li>
  <li className="mb-2 p-2">
    <Link
      to="#description"
      className="text-white hover:text-gray-300 cursor-pointer transition duration-300 flex"
    >
      Description
    </Link>
  </li>
</ul>
        </div>
  
        <div className="p-4 w-3/4">
          <section id="overview">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p>
              Welcome to the API Bucket documentation. This section provides a high-level overview of the API and its features.
            </p>
          </section>
  
          <section id="requirements">
            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
            <p>
              Before you begin, make sure your system meets the following requirements:
            </p>
            <ul>
              <li>Operating System: Any</li>
              <li>Browser Compatibility: Chrome, Firefox, Safari</li>
              {/* Add more requirements as needed */}
            </ul>
          </section>
  
          <section id="installation">
            <h2 className="text-2xl font-bold mb-4">Installation</h2>
            <p>
              Follow the steps below to install API Bucket on your system:
            </p>
            <ol className='ml-10 list-decimal'>
              <li>Download the API Bucket package from the official website.</li>
              <li>Extract the contents of the package to your desired directory.</li>
              <li>Run the installation script.</li>
             
            </ol>
          </section>
  
          <section id="description">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p>
              API Bucket is a powerful tool for managing and organizing your APIs. It provides a user-friendly interface for easy navigation and configuration.
            </p>
          </section>
        </div>
      </div>
    );
  }
  
  export default DocumentationPage;
