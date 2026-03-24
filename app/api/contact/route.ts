import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string
    email?: string
    message?: string
  }

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 }
    )
  }

  return NextResponse.json({
    message: "Message received. Our technical team will respond shortly.",
  })
}
