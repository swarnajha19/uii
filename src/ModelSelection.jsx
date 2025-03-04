import { ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function ModelSelection() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">MODEL SELECTION</h1>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50">
          <ArrowUpDown className="w-4 h-4" />
          <span>Sort</span>
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Select a Model</h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Team
            </label>
            <input type="text" placeholder="Search or select a team" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Project Name
            </label>
            <input type="text" placeholder="Name of your Project" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Project ID
            </label>
            <input type="text" placeholder="Enter your Project ID" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Model
            </label>
            <input type="text" placeholder="Select model from dropdown" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Model Version
            </label>
            <input
              type="text"
              placeholder="Select model's version from dropdown"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input type="text" placeholder="Select starting date" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              End Date
            </label>
            <input type="text" placeholder="Select End date" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Requested Quota
            </label>
            <input type="text" placeholder="Enter your requested quota" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Quota Justification
            </label>
            <input
              type="text"
              placeholder="Enter your justification(Optional)"
            />
          </div>

          <div>
            <Link to="/chatbot">
              <button
                type="button"
                className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50"
              >
                Request Model
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
