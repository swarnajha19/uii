"use client";

import { useState } from "react";
import { Search, MoreVertical, Send } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

export default function ChatInterface() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission
      setMessage("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">CHAT INTERFACE</h1>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50">
          <ArrowUpDown className="w-4 h-4" />
          <span>Sort</span>
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 max-w-4xl mx-auto flex flex-col h-[calc(100vh-180px)]">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
            <span className="font-medium text-gray-700">Model Name</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MoreVertical className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Chat messages will appear here */}
        </div>

        <div className="border-t border-gray-200 p-4">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 bg-gray-100 border-0"
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
              disabled={!message.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
