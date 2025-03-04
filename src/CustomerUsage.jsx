"use client";

import { useState } from "react";
import DateRangePicker from "./components/Side/DataRangePicker";
import Dropdown from "./components/Side/Dropdown";
import Table from "./components/Side/Table";

export default function CustomerUsage() {
  const [dateRange] = useState("Feb 24, 2025 - Mar 3, 2025");
  const [selectedKey] = useState("All Keys");

  return (
    <div>
      <p className="text-gray-600 italic mb-6">
        Customers of your LLM API calls. Tracked when a 'user' param is passed
        in your LLM calls{" "}
        <a href="#" className="text-indigo-600 hover:underline">
          docs here
        </a>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <DateRangePicker
          label="Select Time Range"
          value={dateRange}
          placeholder="Select range"
        />
        <Dropdown
          label="Select Key"
          value={selectedKey}
          placeholder="Select key"
        />
      </div>

      <div className="card">
        <Table columns={["Customer", "Spend", "Total Events"]} data={[]} />
      </div>
    </div>
  );
}
