import { Grid, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Models", id: "models", path: "/models" },
    {
      name: "Chat Completion",
      id: "chat-completion",
      path: "/chat-completion",
    },
    { name: "Usage", id: "usage", path: "/usage" },
    { name: "Team", id: "team", path: "/team" },
    { name: "Budget", id: "budget", path: "/budget" },
    { name: "History", id: "history", path: "/history" },
  ];

  const bottomMenuItems = [
    { name: "Settings", id: "settings", path: "/settings" },
    { name: "Logout", id: "logout", path: "/logout" },
  ];

  const handleNavigation = (item) => {
    if (setActivePage) setActivePage(item.name); // Ensure it doesn't throw an error
    navigate(item.path);
    setIsOpen(false); // Close sidebar on navigation (for mobile users)
  };

  const MenuItem = ({ item, isActive }) => (
    <button
      onClick={() => handleNavigation(item)}
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
    <div className="relative h-full">
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden p-3 fixed top-4 left-4 z-50 bg-white shadow-md rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 w-64 border-r border-gray-200 bg-white flex flex-col h-full transition-transform transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:flex`}
      >
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
    </div>
  );
};

export default Sidebar;
