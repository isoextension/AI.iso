async function generateText() {
    const inputText = document.getElementById('input-text').value;
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': secrets.OPENAI_API_KEY
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: inputText,
            max_tokens: 100
        })
    });
    const data = await response.json();
    const outputText = data.choices[0].text.trim();
    document.getElementById('output-text').innerText = outputText;
}
