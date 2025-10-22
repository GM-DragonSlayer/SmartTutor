import OpenAI from 'openai';


const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


export async function generateFromPrompt(prompt: string, temperature = 0.2) {
const resp = await client.chat.completions.create({
model: 'gpt-4o-mini',
messages: [{ role: 'user', content: prompt }],
temperature,
max_tokens: 800,
});


return resp.choices?.[0]?.message?.content ?? '';
}