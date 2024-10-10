import { NextResponse } from 'next/server'

export async function GET() {
    const jsContent = `
    (function() {
        function loadScript(url, callback) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.onload = callback;
            document.head.appendChild(script);
        }

        function loadStylesheet(url) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        }

        loadStylesheet('${process.env.NEXT_PUBLIC_APP_URL}/styles/globals.css');

        loadScript('https://unpkg.com/react@18/umd/react.production.min.js', function() {
            loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js', function() {
                loadScript('${process.env.NEXT_PUBLIC_APP_URL}/chatbot-bundle.js', function() {
                    window.injectChatbot();
                });
            });
        });
    })();
    `

    return new NextResponse(jsContent, {
        headers: {
            'Content-Type': 'application/javascript',
            'Access-Control-Allow-Origin': '*',
        },
    })
}