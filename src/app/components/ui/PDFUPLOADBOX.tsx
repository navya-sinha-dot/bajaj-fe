"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface PDFFile {
  id: string;
  name: string;
  file: File;
}

export default function PDFUploadBox() {
  const [pdfFiles, setPdfFiles] = useState<PDFFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      addFiles(Array.from(files));
    }
    // Reset input to allow selecting same file again
    e.target.value = "";
  };

  const addFiles = (files: File[]) => {
    const validPDFs = files.filter((file) => file.type === "application/pdf");

    if (validPDFs.length !== files.length) {
      alert("Please only upload PDF files.");
    }

    const newPDFs: PDFFile[] = validPDFs.map((file) => ({
      id: `${Date.now()}-${Math.random()}`,
      name: file.name,
      file: file,
    }));

    setPdfFiles((prev) => [...prev, ...newPDFs]);
  };

  const removePDF = (id: string) => {
    setPdfFiles((prev) => prev.filter((pdf) => pdf.id !== id));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  };

  const handleProceed = () => {
    if (pdfFiles.length === 0) {
      alert("Please upload at least one PDF file before proceeding.");
      return;
    }

    // Store PDF names in localStorage for /chat page
    const pdfNames = pdfFiles.map((pdf) => pdf.name);
    localStorage.setItem("uploadedPdfNames", JSON.stringify(pdfNames));

    // Navigate to chat page
    router.push("/chat");
  };

  return (
    <div className="w-full space-y-4">
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 cursor-pointer ${
          isDragOver
            ? "border-[#E6E6FA] bg-[#E6E6FA]/10 scale-105"
            : "border-gray-300 hover:border-[#E6E6FA] hover:bg-[#E6E6FA]/5"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label className="cursor-pointer block">
          <div className="flex flex-col items-center space-y-2">
            <div className="p-2 bg-[#E6E6FA] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#22223b]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div>
              <span className="text-sm font-semibold text-[#22223b] block">
                Choose PDFs
              </span>
              <span className="text-xs text-gray-600 block">
                Drag & drop or click to select
              </span>
            </div>
            <input
              type="file"
              accept="application/pdf"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </label>
      </div>

      {/* PDF List */}
      {pdfFiles.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-[#22223b]">
            {pdfFiles.length} PDF{pdfFiles.length > 1 ? "s" : ""} selected
          </h3>
          <div className="space-y-2 max-h-32 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {pdfFiles.map((pdf, index) => (
              <div
                key={pdf.id}
                className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                  <div className="p-1.5 bg-red-100 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-gray-800 truncate">
                    {pdf.name.length > 30
                      ? `${pdf.name.substring(0, 30)}...`
                      : pdf.name}
                  </span>
                </div>
                <button
                  onClick={() => removePDF(pdf.id)}
                  className="p-1 hover:bg-red-100 rounded-full transition-colors group"
                  title="Remove"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-gray-400 group-hover:text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Proceed Button */}
      {pdfFiles.length > 0 && (
        <button
          onClick={handleProceed}
          className="w-full py-2 px-4 bg-[#22223b] text-[#E6E6FA] font-semibold rounded-lg hover:bg-[#1a1a2e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Proceed to Chat
        </button>
      )}
    </div>
  );
}
