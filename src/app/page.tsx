'use client';

import React from 'react';
import useChatbotWebComponent from '@/components/ChatbotWebComponent';

export default function ChatbotPage() {
  useChatbotWebComponent();

  return (
    <div>
      <h1>Chatbot Integration</h1>
      <chat-bot></chat-bot> {/* Custom web component */}
    </div>
  );
}
