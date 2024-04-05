import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown ,faBook, faUser, faInfoCircle, faHouse} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); 
  };

  
  useEffect(() => {
    checkLoginStatus();
  }, []);

 
  const handleNavigation = (path) => {
    if (path === '/Welcome' && !isLoggedIn) { 
      alert('Please log in first.'); 
      navigate('/login'); 
      return; 
    }
    navigate(path); 
    setIsDropdownOpen(false); 
  };
  

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <button
            className="text-white font-bold text-xl "
            onClick={() => handleNavigation ('/')}
            >
              <FontAwesomeIcon icon={faHouse} className='mr-2' />
            </button>
            <div className="text-white font-bold text-xl transform hover:scale-x-110">API Bucket</div>
          <div className="relative w-3/4">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-300 cursor-pointer focus:outline-none"
            >
              User{' '}
              <FontAwesomeIcon
                icon={isDropdownOpen ? faChevronUp : faChevronDown}
                className="ml-1"
              />
            </button>
            {isDropdownOpen && (
              <ul className="absolute mt-2  w-48 bg-gray-800 text-white rounded-md shadow-lg z-10">
                <li className='block px-4 py-2 text-sm hover:bg-gray-700'>
                  <button
                    onClick={() => handleNavigation('/Documentation')}
                    className=""
                  >
                     <FontAwesomeIcon icon={faBook} className="mr-3" />
                    Documentation
                  </button>
                </li>
                <li className='block px-4 py-2 text-sm hover:bg-gray-700'>
                  <button
                    onClick={() => handleNavigation('/Welcome')}
                    className=""
                  >
                    <FontAwesomeIcon icon={faUser} className='mr-3' />
                    MyPage
                  </button>
                </li>
                <li className='block px-4 py-2 text-sm hover:bg-gray-700'>
                  <button
                    onClick={() => handleNavigation('/About')}
                    className=""
                  >
                    <FontAwesomeIcon icon={faInfoCircle} className='mr-3' />
                    About
                  </button>
                </li>
              </ul>
            )}
          </div>
          <ul className="flex space-x-4">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => navigate('/Register')}
            >
              Register
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
