import { NextApiRequest, NextApiResponse } from 'next'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const jsContent = `
    (function() {
        function loadScript(url, callback) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.onload = callback;
            document.head.appendChild(script);
        }

        loadScript('https://unpkg.com/react@17/umd/react.production.min.js', function() {
            loadScript('https://unpkg.com/react-dom@17/umd/react-dom.production.min.js', function() {
                loadScript('${process.env.NEXT_PUBLIC_APP_URL}/chatbot-component.js', function() {
                    var chatbotContainer = document.createElement('div');
                    chatbotContainer.id = 'chatbot-container';
                    document.body.appendChild(chatbotContainer);
                    ReactDOM.render(React.createElement(ChatbotComponent), chatbotContainer);
                });
            });
        });
    })();
    `

    res.setHeader('Content-Type', 'application/javascript')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send(jsContent)
}