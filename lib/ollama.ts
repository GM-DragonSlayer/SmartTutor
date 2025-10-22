export async function generateFromPrompt(prompt: string, temperature = 0.2) {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3.1',
        prompt: prompt,
        stream: false,
        options: {
          temperature: temperature,
        }
      }),
    });

    if (!response.ok) {
      throw new Error('Ollama request failed');
    }

    const data = await response.json();
    return data.response || '';
  } catch (error) {
    console.error('Ollama error:', error);
    return 'Error generating content. Make sure Ollama is running.';
  }
}