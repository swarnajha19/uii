import { useState } from "react";
import Login from "./login";
import Sidebar from "./sidebar";
import ModelsPage from "./Model";
import AddModelPage from "./Addmodel";
import TeamsPage from "./Teamspage";
import LogsPage from "./Logspage";
import Navbar from "./Navbar";
import ModelSelection from "./ModelSelection";
import History from "./History";
import ChatInterface from "./Chatinterface";
import AllUpUsage from "./AllUpUsage";
import CustomerUsage from "./CustomerUsage";
import TeamBasedUsage from "./TeamBasedUsage";
import TagBasedUsage from "./TagBasedUsage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Dashboard from "./Home";
import Completion from "./Chatcompletion";
import HistoryPage from "./Historypage";
import Budgetpage from "./Usage";
import Usage from "./Usage";
import Teamspage from "./Teampage";
import ModelsContainer from "./ModelContainer";
import Modelpage from "./Modelpage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Modelpage />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/models" element={<Modelpage />} />
        <Route path="/chat-completion" element={<Completion />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/usage" element={<Usage />} />
        <Route path="/team" element={<Teamspage />} />
      </Routes>
    </Router>
  );
}
