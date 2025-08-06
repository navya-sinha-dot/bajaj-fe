"use client"
import React, { useEffect, useState } from 'react';

const mockHistory = [
  'How do I reset my password?',
  'Show me my last invoice?',
  'What is the interest rate?',
  'Download my statement.',
];

interface ChatLayoutProps {
  pdfName?: string;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ pdfName }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(true);
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] flex flex-row w-screen h-screen bg-black">
      {/* Sidebar with slide-in animation, full height */}
      <div
        className={`relative transition-transform duration-700 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-80'} w-64 bg-[#f6f6ff] bg-opacity-90 shadow-2xl rounded-tr-3xl rounded-br-3xl m-4 flex flex-col h-full`}
      >
        {/* Sidebar Header */}
        <div className="px-6 py-4 border-b border-[#E6E6FA] text-lg font-bold text-gray-700">Chat History</div>
        {/* Chat History List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2">
          {mockHistory.map((item, idx) => (
            <div
              key={idx}
              className="w-full bg-[#E6E6FA] text-black rounded-lg px-4 py-3 text-sm cursor-pointer hover:bg-[#d6d6f5] transition-colors truncate"
              title={item}
            >
              {item}
            </div>
          ))}
        </div>
        {/* New Chat Button */}
        <div className="p-4 border-t border-[#E6E6FA]">
          <button className="w-full py-2 bg-[#E6E6FA] text-black rounded-lg font-semibold hover:bg-[#d6d6f5] transition-colors">+ New Chat</button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-end items-center m-6 rounded-3xl bg-transparent relative">
        {/* PDF Name at the top */}
        {pdfName && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-4 text-lg font-semibold text-[#E6E6FA] bg-black/70 px-6 py-2 rounded-xl shadow-lg border border-[#E6E6FA]">
            {pdfName}
          </div>
        )}
        {/* Input Box at Bottom */}
        <div className="w-4/5 mb-0 pb-6">
          <div className="flex items-center bg-[#22223b] rounded-full shadow-lg px-4 py-3">
            <input
              type="text"
              placeholder="ask a question"
              className="w-full bg-transparent border-none outline-none text-[#E6E6FA] text-lg placeholder-gray-400 px-3 py-2"
            />
            <button className="ml-2 flex items-center justify-center px-4 py-2 bg-[#E6E6FA] text-black rounded-full font-semibold hover:bg-[#d6d6f5] transition-colors shadow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
