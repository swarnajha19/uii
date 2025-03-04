import { Search, Bell, User } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6 px-6 py-4 border-b border-gray-200">
      <h1 className="text-xl font-semibold">FRACTAL LLM GATEWAY</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search model, teams..."
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
};

export default Header;
