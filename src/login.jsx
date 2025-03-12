import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Import eye icons from Lucide React

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        // Store token and user details in local storage
        localStorage.setItem("token", data.api_key);
        localStorage.setItem("virtual_id", data.virtual_id);
        localStorage.setItem("models", JSON.stringify(data.models));

        alert("Login successful! Redirecting to dashboard.");
        navigate("/profile");
      } else {
        setError(data.detail || "Invalid email or password.");
      }
    } catch (err) {
      setLoading(false);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="Logo.png" alt="CogentIQ Logo" className="h-12 mb-2" />
          <h2 className="text-gray-800 text-lg font-semibold">
            Login to LLM Gateway
          </h2>
        </div>

        {/* Login Form */}
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
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition flex justify-center"
            disabled={loading}
          >
            {loading ? "Logging in..." : "CONTINUE"}
          </button>
        </form>

        {/* Error Message */}
        {error && <div className="text-red-600 text-sm mt-2">{error}</div>}

        {/* SSO Login Option */}
        <div className="mt-4 text-center">
          <p className="text-gray-500">OR</p>
          <button className="w-full mt-2 border border-gray-400 py-2 rounded-md flex items-center justify-center">
            <span className="mr-2">🖥️</span> Login using Google
          </button>
        </div>

        {/* Sign Up Button */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">Don't have an account?</p>
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-500 font-semibold hover:underline mt-1"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
