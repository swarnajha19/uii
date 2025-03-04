import { useState } from "react";
import ModelsPage from "./Modelpage";
import ModelSelection from "./ModelSelection";

const ModelsContainer = () => {
  const [currentPage, setCurrentPage] = useState("models"); // Default view

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className={`transition-transform duration-500 ${
          currentPage === "models" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ModelsPage onNext={() => setCurrentPage("selection")} />
      </div>

      <div
        className={`absolute top-0 left-0 w-full transition-transform duration-500 ${
          currentPage === "selection" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ModelSelection onBack={() => setCurrentPage("models")} />
      </div>
    </div>
  );
};

export default ModelsContainer;
