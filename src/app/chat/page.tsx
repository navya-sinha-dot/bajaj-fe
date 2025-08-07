"use client";
import React, { useEffect, useState } from "react";
import ChatLayout from "../components/ui/ChatLayout";

export default function ChatPage() {
  const [pdfNames, setPdfNames] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check for new multiple PDF format first
      const namesJson = localStorage.getItem("uploadedPdfNames");
      if (namesJson) {
        try {
          const names = JSON.parse(namesJson);
          setPdfNames(Array.isArray(names) ? names : []);
        } catch (error) {
          setPdfNames([]);
        }
      } else {
        // Fallback to old single PDF format for compatibility
        const singleName = localStorage.getItem("uploadedPdfName");
        if (singleName) {
          setPdfNames([singleName]);
        }
      }
    }
  }, []);

  return <ChatLayout pdfNames={pdfNames} />;
}
