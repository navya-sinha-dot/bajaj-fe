"use client";

interface ChatLayoutProps {
  pdfNames?: string[];
  pdfName?: string; // Keep for backward compatibility
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ pdfNames = [], pdfName }) => {
  // Use pdfNames if provided, otherwise fallback to single pdfName for compatibility
  const displayNames =
    pdfNames.length > 0 ? pdfNames : pdfName ? [pdfName] : [];

  return (
    <div className="fixed inset-0 z-[1000] flex flex-row w-screen h-screen bg-black">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-end items-center m-6 rounded-3xl bg-transparent relative">
        {/* PDF Names at the top */}
        {displayNames.length > 0 && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-4 max-w-4xl">
            {displayNames.length === 1 ? (
              <div className="text-lg font-semibold text-[#E6E6FA] bg-black/70 px-6 py-2 rounded-xl shadow-lg border border-[#E6E6FA]">
                {displayNames[0]}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-center text-sm font-medium text-[#E6E6FA] bg-black/70 px-4 py-1 rounded-lg border border-[#E6E6FA]">
                  {displayNames.length} PDFs Loaded
                </div>
                <div className="flex flex-wrap gap-2 justify-center max-h-20 overflow-y-auto">
                  {displayNames.map((name, index) => (
                    <div
                      key={index}
                      className="text-xs font-medium text-[#E6E6FA] bg-black/70 px-3 py-1 rounded-lg shadow border border-[#E6E6FA]/50"
                    >
                      {name.length > 20 ? `${name.substring(0, 20)}...` : name}
                    </div>
                  ))}
                </div>
              </div>
            )}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
