"use client";

import React, { useState } from "react";

export default function PDFUploadBox({
  onFileSelect,
}: {
  onFileSelect: (file: File) => void;
}) {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
      onFileSelect(file);
    } else {
      setFileName("");
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-400 p-6 rounded-lg text-center hover:border-blue-500 transition">
      <label className="cursor-pointer block">
        <div className="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-5 4h.01M12 20h.01"
            />
          </svg>
          <span className="text-sm text-gray-600">
            Choose a PDF file or drag and drop it here
          </span>
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </label>

      {fileName && (
        <p className="mt-4 text-sm text-green-700 font-medium">📄 {fileName}</p>
      )}
    </div>
  );
}
