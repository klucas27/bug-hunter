class OpenAIService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    }

    async correctCode(code) {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                prompt: `Correct the following code:\n\n${code}\n\nCorrected code:`,
                max_tokens: 150,
                temperature: 0.5,
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.choices[0].text.trim();
    }
}

export default OpenAIService;