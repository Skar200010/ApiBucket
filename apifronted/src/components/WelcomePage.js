import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';

const isTokenExpired = () => {
  const token = localStorage.getItem('token');
  if (!token) return true;

  const expirationTime = JSON.parse(atob(token.split('.')[1])).exp * 1000;
  return Date.now() >= expirationTime;
};

function WelcomePage() {

  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = () => {
      if (isTokenExpired()) {
        navigate('/');
      }
    };
    checkSession();
  }, [navigate]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;

        if (response.status === 200) {
          setUserProfile(data);
        } else {
          console.error('Error fetching user data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchUserProfile();
  }, []);
  
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = userProfile.userId;
      await axios.post(
        'http://localhost:3000/logout',
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Show a loading message while fetching user profile
  }

  return (
    <div className="relative">
      <SideBar></SideBar>
      <div className="absolute top-5 right-5">
        <div className=" w-56 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-center">
            <div className="text-white text-3xl font-semibold">{userProfile.username}</div>
            <div className="text-sm text-gray-200">{userProfile.email}</div>
          </div>
          <div className="px-6 py-4">
            <button
              className="w-full px-4 py-2 mt-4 text-sm font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
              onClick={handleLogout}
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
};


export default WelcomePage

