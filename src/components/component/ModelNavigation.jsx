const ModelsNavigation = ({ activeView, onViewChange }) => {
  const views = [
    { id: "all", label: "All Models" },
    { id: "add", label: "Add Models" },
    { id: "logs", label: "Logs" },
  ];

  return (
    <div className="px-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">MODELS</h2>
      <div className="inline-flex p-1 bg-gray-100 rounded-lg shadow-sm">
        {views.map((view) => (
          <button
            key={view.id}
            onClick={() => onViewChange(view.id)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeView === view.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {view.label}
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <button className="text-sm text-gray-600 hover:text-gray-900">
          Sort
        </button>
      </div>
    </div>
  );
};

export default ModelsNavigation;
