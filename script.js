function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;

    if (message.trim() === '') {
        return;
    }

    const chat = document.getElementById('chat');
    const userMessage = document.createElement('div');
    userMessage.className = 'message sent';
    userMessage.textContent = message;

    chat.appendChild(userMessage);
    userInput.value = '';

    // Simulate response from GPT (in a real scenario, this would be done through a backend API)
    setTimeout(() => {
        const gptResponse = document.createElement('div');
        gptResponse.className = 'message received';
        gptResponse.textContent = 'I'm sorry, I'm just a demo. I don't have real responses.';
        chat.appendChild(gptResponse);
    }, 500);
}
