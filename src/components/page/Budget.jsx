"use client";

import { useState } from "react";

import Sidebar from "../../sidebar";
import UsagePage from "./UsagePage";
import TeamsPage from "../../Teamspage";
import LogsPage from "../../Logspage";

function Budget() {
  const [activePage, setActivePage] = useState("Models");

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 overflow-hidden">
        {activePage === "Usage" && <UsagePage />}
      </main>
    </div>
  );
}

export default Budget;
