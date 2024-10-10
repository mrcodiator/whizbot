import React from 'react';
import ReactDOM from 'react-dom/client';
import define from 'react-to-webcomponent';
import type { FunctionComponent } from 'react'; // Import type
import ChatbotComponent from '@/components/ChatbotComponent';
import 'react-to-webcomponent'; // Import the custom elements polyfill if needed

// Make sure your component is typed as a React function component
const TypedChatbotComponent: FunctionComponent = ChatbotComponent;

// Define the web component from your React component
define('chat-bot', TypedChatbotComponent, React, ReactDOM);
