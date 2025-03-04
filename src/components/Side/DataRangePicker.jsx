import { Calendar, X } from "lucide-react";

export default function DateRangePicker({ label, value, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <div className="relative">
        <div className="flex items-center border border-gray-300 rounded-md">
          <div className="pl-3">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full py-2 px-3 text-gray-700 focus:outline-none"
            placeholder={placeholder}
            value={value}
            readOnly
          />
          {value && (
            <button className="pr-3">
              <X className="h-5 w-5 text-gray-400" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
