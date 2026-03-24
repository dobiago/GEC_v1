"use client"

import { FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    setMessage("")

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as { message?: string }
      if (!response.ok) {
        throw new Error(data.message || "Request failed")
      }

      event.currentTarget.reset()
      setStatus("sent")
      setMessage(data.message || "Message received.")
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : "Unable to send message.")
    }
  }

  return (
    <form
      className="space-y-5 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">Name</span>
          <input
            required
            name="name"
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/25"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">Email</span>
          <input
            required
            type="email"
            name="email"
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/25"
            placeholder="name@company.com"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          className="w-full rounded-[24px] border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white/25"
          placeholder="Outline your project, basin, or operating requirement."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          className="h-12 rounded-full bg-white px-6 text-sm tracking-[0.08em] text-black hover:bg-zinc-200"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending" : "Send enquiry"}
        </Button>
        {message ? <p className="text-sm text-zinc-400">{message}</p> : null}
      </div>
    </form>
  )
}
