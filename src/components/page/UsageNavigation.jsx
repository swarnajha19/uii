const UsageNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "all-up", label: "All Up" },
    { id: "team-based", label: "Team Based Usage" },
    { id: "customer", label: "Customer Usage" },
    { id: "tag-based", label: "Tag Based Usage" },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
                py-4 px-1 relative
                ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }
                font-medium text-sm focus:outline-none
              `}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default UsageNavigation;
