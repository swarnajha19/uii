import { Grid } from "lucide-react";

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { name: "Models", id: "models" },
    { name: "Chat Completion", id: "chat-completion" },
    { name: "Usage", id: "usage" },
    { name: "Team", id: "team" },
    { name: "Budget", id: "budget" },
    { name: "History", id: "history" },
  ];

  const bottomMenuItems = [
    { name: "Settings", id: "settings" },
    { name: "Logout", id: "logout" },
  ];

  const MenuItem = ({ item, isActive }) => (
    <button
      onClick={() => setActivePage(item.name)}
      className={`flex items-center w-full px-4 py-3 text-left text-sm transition-colors ${
        isActive
          ? "bg-blue-600 text-white rounded-lg"
          : "text-gray-600 hover:bg-gray-100 rounded-lg"
      }`}
    >
      <Grid className="w-5 h-5 mr-3" />
      {item.name}
    </button>
  );

  return (
    <div className="w-64 border-r border-gray-200 bg-white flex flex-col h-full">
      <div className="flex-1 py-6 px-3 flex flex-col gap-1">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            isActive={activePage === item.name}
          />
        ))}
      </div>
      <div className="py-6 px-3 border-t border-gray-200 flex flex-col gap-1">
        {bottomMenuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            isActive={activePage === item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
