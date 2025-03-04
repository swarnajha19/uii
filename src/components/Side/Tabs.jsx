export default function Tabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: "all-up", label: "All Up" },
    { id: "team-based", label: "Team Based Usage" },
    { id: "customer", label: "Customer Usage" },
    { id: "tag-based", label: "Tag Based Usage" },
  ];

  return (
    <div className="border-b border-gray-200 mb-6">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-4 px-1 font-medium text-sm ${
              activeTab === tab.id ? "tab-active" : "tab-inactive"
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
