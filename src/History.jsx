import { ArrowUpDown } from "lucide-react";

export default function History() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">HISTORY OF CHAT COMPLETION</h1>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50">
          <ArrowUpDown className="w-4 h-4" />
          <span>Sort</span>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <p>No chat history available</p>
      </div>
    </div>
  );
}
