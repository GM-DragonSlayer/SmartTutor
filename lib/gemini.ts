export async function generateFromPrompt(prompt: string, temperature = 0.2) {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error('GEMINI_API_KEY not found in environment variables');
    return 'Please add GEMINI_API_KEY to your .env.local file';
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: temperature,
          maxOutputTokens: 800,
        }
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Gemini API error:', data);
      throw new Error(`Gemini API error: ${data.error?.message || 'Unknown error'}`);
    }

    const result = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!result) {
      console.error('No content generated:', data);
      return 'No content was generated. Please try again.';
    }
    
    return result;
  } catch (error) {
    console.error('Gemini error:', error);
    return `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}