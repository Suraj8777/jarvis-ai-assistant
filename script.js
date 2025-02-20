document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Display user message
    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Clear input
    document.getElementById('user-input').value = '';

    // Simulate AI response
    setTimeout(() => {
        const aiMessage = document.createElement('div');
        aiMessage.className = 'message ai-message';
        aiMessage.textContent = getAIResponse(userInput);
        chatBox.appendChild(aiMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
});

function getAIResponse(userInput) {
    // Simple AI response logic
    const responses = {
        "hello": "Hello! How can I assist you today?",
        "how are you": "I'm just a program, but I'm functioning perfectly! How about you?",
        "what's your name": "I'm Jarvis, your personal AI assistant.",
        "bye": "Goodbye! Have a great day!",
        "default": "I'm sorry, I didn't understand that. Can you please rephrase?"
    };

    const lowerCaseInput = userInput.toLowerCase();
    return responses[lowerCaseInput] || responses['default'];
}
