import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import ModelsPage from "./Model";
import ChatInterface from "./Chatinterface";

export default function Completion() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleAdd = () => navigate("/protected");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F9FAFB]">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-[60px]">
        {/* Navbar */}
        <Navbar onAdd={handleAdd} />
        <div>
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
