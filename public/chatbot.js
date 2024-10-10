import React from 'react';
import ReactDOM from 'react-dom/client';
import define from 'react-to-webcomponent';
import ChatbotComponent from '@/components/ChatbotComponent';
import 'react-to-webcomponent'; // Import the custom elements polyfill if needed

// Define the web component from your React component
const ChatbotWebComponent = define('chat-bot', ChatbotComponent, React, ReactDOM);

// If you want to use it in a way that ESLint doesn't complain, you can attach it to the window object
window.customElements.define('chat-bot', ChatbotWebComponent); // Register the web component
