import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!process.env.HUGGINGFACE_API_KEY) {
      throw new Error("HUGGINGFACE_API_KEY is not set")
    }

    const response = await fetch(
      "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: message }),
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    if (
      !Array.isArray(result) ||
      result.length === 0 ||
      !result[0].generated_text
    ) {
      throw new Error("Unexpected response format from Hugging Face API")
    }

    return NextResponse.json({ reply: result[0].generated_text })
  } catch (error) {
    console.error("Error in chatbot API:", error)
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An error occurred while processing your request",
      },
      { status: 500 }
    )
  }
}
