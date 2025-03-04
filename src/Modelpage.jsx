import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import History from "./History";
import TeamsPage from "./Teamspage";
import ModelsContainer from "./ModelContainer";

export default function Modelpage() {
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
          <ModelsContainer />
        </div>
      </div>
    </div>
  );
}
