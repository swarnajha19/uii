import { Grid, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Models", id: "models", path: "/models" },
    {
      name: "Model Request",
      id: "Model Request",
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
    if (setActivePage) setActivePage(item.name);
    navigate(item.path);
    setIsOpen(false); // Close sidebar on mobile
  };

  const MenuItem = ({ item, isActive }) => (
    <button
      onClick={() => handleNavigation(item)}
      className={`flex items-center w-full px-4 py-3 text-left text-sm transition-all ${
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
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden p-3 fixed top-4 left-4 z-50 bg-white shadow-md rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Overlay (for closing on mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-screen w-64 lg:w-64 bg-white border-r border-gray-200 flex flex-col transition-transform transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* Close Button for Mobile */}
        <button
          className="lg:hidden absolute top-4 right-4 p-2"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

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
    </>
  );
};

export default Sidebar;
