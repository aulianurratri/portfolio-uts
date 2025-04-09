import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await geminiRes.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Maaf, saya tidak dapat menjawab saat ini.";

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { reply: "Terjadi kesalahan saat menghubungi Gemini API." },
      { status: 500 }
    );
  }
}
