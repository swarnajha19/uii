import { useState } from "react";
import { RefreshCw, Edit2, Trash2 } from "lucide-react";

const TeamsPage = () => {
  const [activeTab, setActiveTab] = useState("Your Teams");
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  const teams = [
    {
      teamName: "Team 2",
      teamId: "6fee057...",
      created: "3/2/2025",
      spend: 0,
      budget: 100,
      models: "All Proxy Models",
      organization: "8c25debb-3852-44a5-8d68-fe788b45a1ba",
    },
    {
      teamName: "new team",
      teamId: "bf9ece1...",
      created: "3/2/2025",
      spend: 0,
      budget: "No limit",
      models: "All Proxy Models",
      organization: "",
    },
  ];

  const handleRefresh = () => {
    setLastRefreshed(new Date());
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex gap-4 border-b border-gray-200 w-full md:w-auto overflow-auto">
          {["Your Teams", "Available Teams"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm whitespace-nowrap ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-4 md:mt-0">
          <span>Last Refreshed: {lastRefreshed.toLocaleString()}</span>
          <button
            onClick={handleRefresh}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-sm md:text-base">
        Click on "Team ID" to view team details and manage team members.
      </p>

      <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Team Name",
                "Team ID",
                "Created",
                "Spend (USD)",
                "Budget (USD)",
                "Models",
                "Organization",
                "Info",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teams.map((team) => (
              <tr key={team.teamId} className="whitespace-nowrap">
                <td className="px-4 py-4 text-gray-900">{team.teamName}</td>
                <td className="px-4 py-4">
                  <button className="text-blue-600 hover:underline">
                    {team.teamId}
                  </button>
                </td>
                <td className="px-4 py-4 text-gray-500">{team.created}</td>
                <td className="px-4 py-4 text-gray-500">{team.spend}</td>
                <td className="px-4 py-4 text-gray-500">{team.budget}</td>
                <td className="px-4 py-4">
                  <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full">
                    {team.models}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-500">{team.organization}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-600 hover:text-gray-900">
                      Keys
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Members
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="mt-6 w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        + Create New Team
      </button>
    </div>
  );
};

export default TeamsPage;
