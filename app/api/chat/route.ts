import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const systemPrompt = `You are Kenjie P. Lazo's AI assistant on his portfolio website. You are friendly, helpful, and professional.

About Kenjie:
- Front-End Developer and Graphic Designer based in Metro Manila, Philippines
- Skills: JavaScript, TypeScript, React, Next.js, Vue.js, Tailwind CSS, Node.js, Python, PHP, Laravel
- Passionate about creating beautiful, functional digital experiences
- Open to job opportunities and freelance projects

Your role:
- Answer questions about Kenjie's skills, experience, and projects
- Help visitors learn more about his work
- Be conversational and friendly
- If asked about something you don't know about Kenjie, politely say you don't have that information and suggest they contact him directly
- Keep responses concise but helpful`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error('OpenAI API error')
    }

    const data = await response.json()
    const assistantMessage = data.choices[0].message.content

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to get response' },
      { status: 500 }
    )
  }
}