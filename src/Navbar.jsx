import { Link, useLocation } from 'react-router-dom'
import { Search, Bell, User } from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  
  return (
    <header className="border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-medium text-gray-700">
          FRACTAL LLM GATEWAY
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="relative w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500" />
            </div>
            <input 
              type="search" 
              className="bg-gray-100 pl-10 pr-4 py-2 rounded-md w-full text-sm"
              placeholder="Search model, teams..." 
            />
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-700" />
          </button>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  )
}
