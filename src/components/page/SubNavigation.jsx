const SubNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "cost", label: "Cost" },
    { id: "activity", label: "Activity" },
  ];

  return (
    <div className="inline-flex p-1 bg-gray-100 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
              px-4 py-2 text-sm font-medium rounded-md transition-all
              ${
                activeTab === tab.id
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }
            `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SubNavigation;
