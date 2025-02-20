
async function getAIResponse(userInput) {
    const apiKey = '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';
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: userInput,
            max_tokens: 150
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}
