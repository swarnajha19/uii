"use client";

import { useState } from "react";
import UsageNavigation from "./UsageNavigation";
import SubNavigation from "./SubNavigation";
import Sidebar from "../../sidebar";
import Navbar from "../../Navbar";

const UsagePage = () => {
  const [activeMainTab, setActiveMainTab] = useState("all-up");
  const [activeSubTab, setActiveSubTab] = useState("cost");

  // Placeholder function for handling add action
  const handleAdd = () => {
    console.log("Add action triggered");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F9FAFB]">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-[60px]">
        {/* Navbar */}
        <Navbar onAdd={handleAdd} />

        <div className="flex flex-col h-full">
          <UsageNavigation
            activeTab={activeMainTab}
            onTabChange={setActiveMainTab}
          />

          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <SubNavigation
                activeTab={activeSubTab}
                onTabChange={setActiveSubTab}
              />
            </div>

            {/* Content area - render different content based on activeMainTab */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              {activeMainTab === "all-up" && (
                <div>
                  <h2 className="text-lg font-medium mb-4">Monthly Spend</h2>
                  {/* Add graph/chart components here */}
                </div>
              )}

              {activeMainTab === "team-based" && (
                <div>
                  <h2 className="text-lg font-medium mb-4">
                    Total Spend Per Team
                  </h2>
                  {/* Add team-based content here */}
                </div>
              )}

              {activeMainTab === "customer" && (
                <div>
                  <h2 className="text-lg font-medium mb-4">Customer Usage</h2>
                  {/* Add customer usage content here */}
                </div>
              )}

              {activeMainTab === "tag-based" && (
                <div>
                  <h2 className="text-lg font-medium mb-4">Tag Based Usage</h2>
                  {/* Add tag-based content here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsagePage;
