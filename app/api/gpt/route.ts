import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: API_KEY });

export async function POST(req: NextRequest) {
  try {
    if (!API_KEY) {
      console.error('Missing OpenAI API Key');
      return NextResponse.json(
        { error: 'Server misconfiguration' },
        { status: 500 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch (error) {
      console.error('Invalid JSON received', error);
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    console.log('Received request body:', body);

    const text = body?.text;
    if (!text) {
      console.error('Missing text in request');
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are going to get a link to someones GitHub repo so you can write them a deep dive into their project.' },
        { role: 'user', content: text },
      ],
    });

    console.log('OpenAI API response:', JSON.stringify(completion, null, 2));
    console.log('Message content:', completion.choices[0]?.message?.content);

    if (!completion.choices || completion.choices.length === 0) {
      console.error('No choices returned from OpenAI');
      return NextResponse.json(
        { error: 'No response from OpenAI' },
        { status: 500 }
      );
    }

    const messageContent =
      completion.choices[0]?.message?.content || 'No content received';
    return NextResponse.json({ message: messageContent });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
