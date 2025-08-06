"use client";
import PDFUploadBox from "./components/ui/PDFUPLOADBOX";
import { DemoOne } from "./demo";

export default function Home() {
  // Dummy handler for PDF file selection
  const handleFileSelect = (file: File) => {
    // You can implement PDF handling logic here
    console.log("Selected file:", file);
  };

  return (
    <div className="relative flex min-h-screen">
      <div className="flex flex-1 items-center justify-center relative ">
        <DemoOne />
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 bg-[#d5b8ff] flex items-center justify-center shrink-0 grow-0 basis-[350px] rounded-xl shadow-lg p-4 z-10 h-[300px]">
        <PDFUploadBox onFileSelect={handleFileSelect} />
      </div>
    </div>
  );
}
