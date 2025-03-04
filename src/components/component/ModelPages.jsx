"use client";

import { useState } from "react";

import Header from "./Header";
import Tables from "./Tables";
import AddModelForm from "./AddModel";
import ModelsNavigation from "./ModelNavigation";

const ModelsPages = () => {
  const [activeView, setActiveView] = useState("all");

  const modelColumns = [
    { name: "Model ID", key: "id" },
    { name: "Public Model Name", key: "publicName" },
    { name: "Provider", key: "provider" },
    { name: "LLM Model Name", key: "llmName" },
    { name: "Created At", key: "createdAt" },
    { name: "Updated At", key: "updatedAt" },
    { name: "Created By", key: "createdBy" },
    { name: "Input Cost", key: "inputCost" },
    { name: "Output Cost", key: "outputCost" },
  ];

  const logColumns = [
    { name: "Model ID", key: "modelId" },
    { name: "Public Model Name", key: "publicModelName" },
    { name: "Provider", key: "provider" },
    { name: "LLM Model Name", key: "llmModelName" },
    { name: "Created At", key: "createdAt" },
    { name: "Status", key: "status" },
    { name: "Created By", key: "createdBy" },
    { name: "Total Cost", key: "totalCost" },
  ];

  const renderContent = () => {
    switch (activeView) {
      case "all":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6 px-6">All Models</h2>
            <Tables
              columns={modelColumns}
              data={[]}
              emptyMessage="No models found"
            />
          </>
        );
      case "add":
        return <AddModelForm onSubmit={(data) => console.log(data)} />;
      case "logs":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6 px-6">Logs</h2>
            <Table
              columns={logColumns}
              data={[]}
              emptyMessage="No models found"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <Header />
      <ModelsNavigation activeView={activeView} onViewChange={setActiveView} />
      <div className="flex-1 overflow-auto">{renderContent()}</div>
    </div>
  );
};

export default ModelsPages;
