export default function SubTabs({ activeTab, onTabChange, tabs }) {
  return (
    <div className="flex space-x-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`py-2 px-4 rounded-full text-sm font-medium ${
            activeTab === tab.id ? "subtab-active" : "subtab-inactive"
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
