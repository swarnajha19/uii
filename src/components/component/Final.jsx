"use client";

import { useState } from "react";
import Sidebar from "../../sidebar";
import TeamsPage from "../../Teamspage";
import LogsPage from "../../Logspage";
import AddModelPages from "../../Addmodel";
import ModelsPages from "./ModelPages";

function Final() {
  const [activePage, setActivePage] = useState("Models");
  const [currentView, setCurrentView] = useState("list"); // 'list' or 'add'

  const handleAddModelClick = () => {
    setCurrentView("add");
  };

  const handleBackToList = () => {
    setCurrentView("list");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 overflow-hidden">
        {" "}
        {/* Changed overflow from auto to hidden */}
        {activePage === "Models" && (
          <>
            {currentView === "list" ? (
              <ModelsPages onAddModelClick={handleAddModelClick} />
            ) : (
              <AddModelPages onBack={handleBackToList} />
            )}
          </>
        )}
        {activePage === "Team" && <TeamsPage />}
        {activePage === "Logs" && <LogsPage />}
      </main>
    </div>
  );
}

export default Final;
