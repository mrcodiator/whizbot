(function () {
    // Create styles
    var styles = `
      .chat-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #18181b;
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 9998;
      }
      .chat-iframe {
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 370px;
        height: 600px;
        border: none;
        border-radius: 10px;
        overflow: hidden;
        background: white;
        z-index: 9999;
        transition: opacity 0.3s ease, transform 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        pointer-events: none;
      }
      .chat-iframe.visible {
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
      }

      @media(max-width: 640px){
        .chat-iframe{
            width: 100%;
            height: 100%;
            right: 0;
            bottom: 0;
            border-radius: 0;
        }
      }

    `;

    // Append styles to head
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Create chat button
    var chatButton = document.createElement('button');
    chatButton.className = 'chat-button';
    chatButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>';
    document.body.appendChild(chatButton);

    // Create iframe (initially hidden)
    var iframe = document.createElement('iframe');
    iframe.src = 'http://localhost:3000/chatbot/[chatbotId]';
    iframe.className = 'chat-iframe';
    document.body.appendChild(iframe);

    let isChatOpen = false;

    // Toggle iframe visibility when chat button is clicked
    chatButton.addEventListener('click', function () {
        isChatOpen = !isChatOpen; // Toggle the state
        if (isChatOpen) {
            iframe.classList.add('visible');
            chatButton.style.display = 'none';
            iframe.contentWindow.postMessage({ type: 'OPEN_CHAT' }, '*');
        } else {
            iframe.classList.remove('visible');
            chatButton.style.display = 'flex';
            iframe.contentWindow.postMessage({ type: 'CHAT_VISIBILITY_CHANGE', isOpen: false }, '*');
        }
    });

    // Listen for messages from the iframe
    window.addEventListener('message', function (event) {
        if (event.data.type === 'CHAT_VISIBILITY_CHANGE') {
            isChatOpen = event.data.isOpen;
            if (isChatOpen) {
                iframe.classList.add('visible');
                chatButton.style.display = 'none';
            } else {
                iframe.classList.remove('visible');
                chatButton.style.display = 'flex';
            }
        }
    }, false);

    // Ensure the chat is closed on page load/refresh
    window.addEventListener('load', function () {
        if (!isChatOpen) {
            iframe.classList.remove('visible');
            chatButton.style.display = 'flex';
        }
    });
})();
