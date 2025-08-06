"use client"
import React, { useEffect, useState } from 'react';
import ChatLayout from '../components/ui/ChatLayout';

export default function ChatPage() {
  const [pdfName, setPdfName] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = localStorage.getItem('uploadedPdfName');
      setPdfName(name || undefined);
    }
  }, []);

  return <ChatLayout pdfName={pdfName} />;
}