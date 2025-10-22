import { NextResponse } from 'next/server';
import { generateFromPrompt } from '@/lib/gemini';


export async function POST(req: Request) {
const { topic } = await req.json();
if (!topic) return NextResponse.json({ error: 'Missing topic' }, { status: 400 });


// 1) Generate explanation
const explanationPrompt = `Explain the following topic to a 2nd year college student in clear steps and examples: "${topic}". Keep it concise (~250-400 words).`;
const explanation = await generateFromPrompt(explanationPrompt, 0.2);


// 2) Generate quiz (5 questions: mix of MCQ and short answer)
const quizPrompt = `Create 5 quiz questions (mix of multiple-choice and short-answer) based on the explanation below. Return JSON with structure { questions: [ { id, type: 'mcq'|'short', question, options?: [], answer } ] }. Explanation:\n\n${explanation}`;
const quizRaw = await generateFromPrompt(quizPrompt, 0.3);


// Try to parse JSON from the model safely
let quiz;
try {
quiz = JSON.parse(quizRaw.match(/\{[\s\S]*\}/)?.[0] ?? quizRaw);
} catch (e) {
// Fallback: return raw quiz text
quiz = { raw: quizRaw };
}


return NextResponse.json({ explanation, quiz });
}