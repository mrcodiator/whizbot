// public/chatbot.js

// Create a simple web component
class ChatbotWebComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="chatbot"></div>
        `;

        // Dynamically load the React component using a CDN
        const script = document.createElement('script');
        script.src = "https://your-nextjs-domain.com/path/to/chatbot.bundle.js"; // Adjust the path
        script.onload = () => {
            const ChatbotComponent = window.ChatbotComponent; // Expose your component
            const root = ReactDOM.createRoot(document.getElementById('chatbot'));
            root.render(React.createElement(ChatbotComponent));
        };
        document.head.appendChild(script);
    }
}

// Define the web component
customElements.define('chat-bot', ChatbotWebComponent);
