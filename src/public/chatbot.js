(function () {
    const chatRoot = document.createElement('div');
    chatRoot.id = 'chatbot-root';
    document.body.appendChild(chatRoot);

    const loadChatbot = async () => {
        const { ChatbotWidget } = await import('./components/ChatbotComponent.tsx');
        const root = ReactDOM.createRoot(document.getElementById('chatbot-root'));
        root.render(React.createElement(ChatbotWidget));
    };

    if (window.React && window.ReactDOM) {
        loadChatbot();
    } else {
        const reactScript = document.createElement('script');
        reactScript.src = 'https://unpkg.com/react/umd/react.production.min.js';
        reactScript.onload = () => {
            const reactDOMScript = document.createElement('script');
            reactDOMScript.src = 'https://unpkg.com/react-dom/umd/react-dom.production.min.js';
            reactDOMScript.onload = loadChatbot;
            document.body.appendChild(reactDOMScript);
        };
        document.body.appendChild(reactScript);
    }
})();
