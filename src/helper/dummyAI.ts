
export async function* generateDummyResponse(message: string, history: string) {
    const responses = [
        "I'm a dummy AI, but I'll try my best to help!",
        "That's an interesting question. Let me think...",
        "I don't have real AI capabilities, but I can pretend!",
        `You said: "${message}". That's fascinating!`,
        "I'm just a placeholder, but I appreciate your input.",
        "Beep boop! I'm processing your request... Just kidding, I'm a dummy AI!",
    ];

    console.log(history);


    const selectedResponse = responses[Math.floor(Math.random() * responses.length)];
    const words = selectedResponse.split(' ');

    for (const word of words) {
        yield word + ' ';
        await new Promise(resolve => setTimeout(resolve, 100)); // Simulate typing delay
    }
}

export async function generateAIResponse(message: string, history: string) {
    return generateDummyResponse(message, history);
}