import { Search, Bell, User, ArrowUpDown } from "lucide-react";

const ModelsPag = ({ onAddModelClick, setActivePage }) => {
  const columns = [
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

  // Sample data - empty for now
  const models = [];

  const handleLogsClick = () => {
    // You might want to handle this through a prop or context
    setActivePage("Logs");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">FRACTAL LLM GATEWAY</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search model, teams..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">MODELS</h2>
        <div className="flex gap-2 mb-4">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
            All Models
          </button>
          <button
            onClick={onAddModelClick}
            className="text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100"
          >
            Add Models
          </button>
          <button
            onClick={handleLogsClick}
            className="text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100"
          >
            Logs
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">All Models</h2>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <div className="flex items-center gap-1">
                      {column.name}
                      <button className="opacity-0 hover:opacity-100">
                        <ArrowUpDown className="h-3 w-3" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {models.length > 0 ? (
                models.map((model) => (
                  <tr key={model.id}>
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {model[column.key]}
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

export default ModelsPag;
