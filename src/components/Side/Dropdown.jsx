import { ChevronDown, X } from "lucide-react";

export default function Dropdown({ label, value, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <div className="relative">
        <div className="flex items-center justify-between border border-gray-300 rounded-md py-2 px-3">
          <span className="text-gray-700">{value || placeholder}</span>
          <div className="flex items-center">
            {value && (
              <button className="mr-1">
                <X className="h-5 w-5 text-gray-400" />
              </button>
            )}
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
