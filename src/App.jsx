import { useState } from "react";
import Login from "./login";
import Sidebar from "./sidebar";
import ModelsPage from "./Model";
import AddModelPage from "./Addmodel";
import TeamsPage from "./Teamspage";
import LogsPage from "./Logspage";
export default function App() {
  return (
    <div>
      <Login />
      <Sidebar />
      <ModelsPage />
      <AddModelPage />
      <TeamsPage />
      <LogsPage />
    </div>
  );
}
