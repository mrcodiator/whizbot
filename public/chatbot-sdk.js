// public/chatbot-sdk.js
class ChatbotWebComponent extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

        // Load the React component
        const chatbotContainer = document.createElement('div');
        mountPoint.appendChild(chatbotContainer);

        // Insert the HTML/React app. External websites will use this SDK.
        const script = document.createElement('script');
        script.src = "https://yourdomain.com/path-to-your-react-chatbot-bundle.js"; // URL of the bundled React component
        document.body.appendChild(script);
    }
}

if (!customElements.get('chat-bot')) {
    customElements.define('chat-bot', ChatbotWebComponent);
}
