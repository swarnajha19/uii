import { ArrowUpDown } from "lucide-react";

const ModelsPage = ({ onNext }) => {
  const columns = [
    "Model ID",
    "Public Model Name",
    "Provider",
    "LLM Model Name",
    "Created At",
    "Updated At",
    "Created By",
    "Input Cost",
    "Output Cost",
  ];

  const models = []; // Sample data - empty for now

  return (
    <div className="p-4 sm:p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-bold mb-4">MODELS</h2>

        {/* Buttons Container */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="bg-gray-200 text-gray-800 px-3 py-2 rounded-full text-sm font-medium">
            All Models
          </button>
          <button
            className="text-gray-600 px-3 py-2 rounded-full text-sm font-medium hover:bg-gray-100"
            onClick={onNext} // Move to ModelSelection
          >
            Add Models
          </button>
          <button className="text-gray-600 px-3 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
            Logs
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div>
        <h2 className="text-lg sm:text-2xl font-bold mb-6">All Models</h2>

        <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column}
                    className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center gap-1">
                      {column}
                      <button className="opacity-0 group-hover:opacity-100">
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {models.length > 0 ? (
                models.map((model, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    {columns.map((column) => (
                      <td
                        key={column}
                        className="px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500"
                      >
                        {model[column]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-6 py-8 text-center text-sm text-gray-500"
                  >
                    No models found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;
