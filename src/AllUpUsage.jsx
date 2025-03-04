"use client";

import { useState } from "react";
import SubTabs from "./components/Side/SubTabs";
import Chart from "./components/Side/Chart";

export default function AllUpUsage() {
  const [activeSubTab, setActiveSubTab] = useState("cost");

  const subTabs = [
    { id: "cost", label: "Cost" },
    { id: "activity", label: "Activity" },
  ];

  return (
    <div>
      <SubTabs
        activeTab={activeSubTab}
        onTabChange={setActiveSubTab}
        tabs={subTabs}
      />

      <div className="mb-6">
        <p className="text-gray-600">Project Spend March 1 - 31</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <div>
            <p className="text-sm text-gray-500">Total Spend</p>
            <p className="text-3xl font-bold">$0.0000</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Max Budget</p>
            <p className="text-3xl font-bold">No limit</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-700">Monthly Spend</h3>
          <div className="flex items-center">
            <span className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-cyan-500 mr-2"></span>
              <span className="text-sm text-gray-500">spend</span>
            </span>
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );
}
