"use client";
import PDFUploadBox from "./components/ui/PDFUPLOADBOX";
import { DemoOne } from "./demo";
import React from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#181818]">
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Enhanced container for PDFUploadBox */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[480px] max-h-[80vh] bg-[#E6E6FA] rounded-2xl shadow-2xl p-6 transition-all duration-300 hover:shadow-3xl overflow-y-auto">
          <div className="w-full flex flex-col items-center">
            <div className="mb-4 text-center">
              <h1 className="text-2xl font-bold text-[#22223b] mb-1">
                Upload PDFs
              </h1>
              <p className="text-[#22223b]/70 text-xs">
                Start your AI document chat
              </p>
            </div>
            <PDFUploadBox />
          </div>
        </div>
        <DemoOne />
      </div>
    </div>
  );
}
