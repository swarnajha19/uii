import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch stored user data from localStorage
    const virtualId = localStorage.getItem("virtual_id");
    const apiKey = localStorage.getItem("token"); // Stored as token in Login.jsx

    if (virtualId && apiKey) {
      setUserData({ virtualId, apiKey });
    } else {
      navigate("/login"); // Redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear(); // Clear user data
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F9FAFB]">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-[60px]">
        {/* Navbar */}
        <Navbar />

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
            {/* Profile Header */}
            <img
              src="Logo.png"
              alt="CogentIQ Logo"
              className="h-12 mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              User Profile
            </h2>

            {/* Profile Details */}
            {userData ? (
              <div className="mt-4 text-gray-700">
                <p className="text-lg">
                  <strong>Virtual ID:</strong> {userData.virtualId}
                </p>
                <p className="text-lg truncate">
                  <strong>API Key:</strong> {userData.apiKey}
                </p>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="w-full mt-6 bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <p className="text-gray-500 mt-4">Loading user data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
