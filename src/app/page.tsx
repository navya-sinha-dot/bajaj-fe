'use client';
import PDFUploadBox from "./components/ui/PDFUPLOADBOX";
import { DemoOne } from "./demo";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  const handleFileSelect = (file: File) => {
    setAnimate(true);
    // Store PDF name in localStorage for /chat page
    if (file && file.name) {
      localStorage.setItem('uploadedPdfName', file.name);
    }
    setTimeout(() => {
      router.push('/chat');
    }, 600); // Animation duration
  };

  return (
    <div className="flex min-h-screen bg-[#181818]">
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Solid light lavender background behind PDFUploadBox */}
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ease-in-out ${animate ? 'scale-110 w-[420px] h-[260px]' : 'w-[370px] h-[220px]'} bg-[#E6E6FA] rounded-2xl shadow-xl flex items-center justify-center`}
        >
          <div className={`w-full h-full flex items-center justify-center`}>
            <PDFUploadBox onFileSelect={handleFileSelect} />
          </div>
        </div>
        <DemoOne />
      </div>
    </div>
  );
}
  
  
  

