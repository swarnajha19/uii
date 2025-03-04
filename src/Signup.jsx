import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Sign up successful! Redirecting to login.");
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="Logo.png" alt="CogentIQ Logo" className="h-12 mb-2" />
          <h2 className="text-gray-800 text-lg font-semibold">
            Sign Up for LLMOps Services
          </h2>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            CONTINUE
          </button>
        </form>

        {/* Error Message */}
        {error && <div className="text-red-600 text-sm mt-2">{error}</div>}

        {/* SSO Login Option */}
        <div className="mt-4 text-center">
          <p className="text-gray-500">OR</p>
          <button className="w-full mt-2 border border-gray-400 py-2 rounded-md flex items-center justify-center">
            <span className="mr-2">🖥️</span> Sign Up using Google
          </button>
        </div>

        {/* Login Redirect */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">Already have an account?</p>
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 font-semibold hover:underline mt-1"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
