import { ArrowLeft } from "lucide-react";

export default function ModelSelection({ onBack }) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <button
          className="flex items-center gap-1 text-gray-700 hover:text-black text-sm"
          onClick={onBack} // Move back to ModelsPage
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <h1 className="text-lg sm:text-xl font-bold">MODEL SELECTION</h1>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 max-w-full sm:max-w-4xl mx-auto">
        <h2 className="text-lg sm:text-2xl font-bold mb-6">Select a Model</h2>

        <form className="space-y-4 sm:space-y-6">
          {[
            "Team",
            "Project Name",
            "Project ID",
            "Model",
            "Model Version",
            "Start Date",
            "End Date",
            "Requested Quota",
            "Quota Justification",
          ].map((label, index) => (
            <div key={index}>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type="text"
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
              />
            </div>
          ))}

          <div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Request Model
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
