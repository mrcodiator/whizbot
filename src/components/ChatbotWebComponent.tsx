'use client';

import React, { useEffect } from 'react';
import ChatbotComponent from './ChatbotComponent';
import { createRoot } from "react-dom/client";

function defineWebComponent() {
    class ChatbotWebComponent extends HTMLElement {
        connectedCallback() {
            const mountPoint = document.createElement('div');
            this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

            // Initialize React Root
            const root = createRoot(mountPoint);

            // Render the React component
            root.render(<ChatbotComponent />);
        }
    }

    if (!customElements.get('chat-bot')) {
        customElements.define('chat-bot', ChatbotWebComponent);
    }
}

export default function useChatbotWebComponent() {
    useEffect(() => {
        defineWebComponent();  // Define the web component on the client-side only
    }, []);
}
