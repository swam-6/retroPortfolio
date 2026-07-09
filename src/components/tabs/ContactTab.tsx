"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type SendStatus = "idle" | "loading" | "success" | "error";

const emailJsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const missingEmailJsConfig = [
  ["NEXT_PUBLIC_EMAILJS_SERVICE_ID", emailJsConfig.serviceId],
  ["NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", emailJsConfig.templateId],
  ["NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", emailJsConfig.publicKey],
].filter(([, value]) => !value).map(([key]) => key);

export default function ContactTab() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SendStatus>("idle");
  const [statusText, setStatusText] = useState("Incoming connection established. Awaiting input stream...");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setStatusText("Transmission failed. Sender name, address, and payload data are required.");
      return;
    }

    if (missingEmailJsConfig.length > 0) {
      setStatus("error");
      setStatusText(`EmailJS config missing: ${missingEmailJsConfig.join(", ")}. Restart the dev server after editing .env.local.`);
      return;
    }

    setStatus("loading");
    setStatusText("Encrypting payload... opening outbound channel...");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.publicKey,
          template_params: {
            from_name: name.trim(),
            from_email: email.trim(),
            reply_to: email.trim(),
            message: message.trim(),
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`${response.status}: ${await response.text()}`);
      }

      setEmail("");
      setName("");
      setMessage("");
      setStatus("success");
      setStatusText("Transmission complete. Message delivered successfully.");
    } catch (error) {
      const detail = error instanceof Error ? error.message : "unknown error";
      console.error("EmailJS send failed:", detail);
      setStatus("error");
      setStatusText(`Transmission failed: ${detail}`);
    }
  }

  return (
    <div className="flex flex-col gap-5 md:gap-6 max-w-lg mx-auto w-full">
      <h2 className="font-heading text-lg md:text-xl mb-2 text-center">CONTACT.ME</h2>
      
      <p className={`font-retro text-base md:text-lg mb-2 md:mb-4 text-center ${status === "error" ? "text-retro-red" : status === "success" ? "text-retro-green" : "text-retro-border/80"}`}>
        {statusText}
      </p>

      <form className="flex flex-col gap-4 font-retro text-base md:text-lg" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-heading text-xs">SENDER_NAME</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="bg-white border-[3px] border-retro-border p-3 w-full focus:outline-none focus:bg-retro-yellow/10 focus:shadow-pixel transition-all"
            placeholder="Your name"
            disabled={status === "loading"}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-heading text-xs">SENDER_ADDRESS</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="bg-white border-[3px] border-retro-border p-3 w-full focus:outline-none focus:bg-retro-yellow/10 focus:shadow-pixel transition-all"
            placeholder="user@domain.com"
            disabled={status === "loading"}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-heading text-xs">PAYLOAD_DATA</label>
          <textarea 
            id="message" 
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="bg-white border-[3px] border-retro-border p-3 w-full focus:outline-none focus:bg-retro-yellow/10 focus:shadow-pixel transition-all resize-none custom-scrollbar"
            placeholder="Enter your message here..."
            disabled={status === "loading"}
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={status === "loading"}
          className="mt-4 bg-retro-green text-retro-border font-heading text-xs md:text-sm px-4 md:px-6 py-4 border-[3px] border-retro-border hover:-translate-y-1 hover:shadow-pixel transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <Send size={16} />
          {status === "loading" ? "SENDING..." : "EXECUTE_SEND"}
        </button>
      </form>
    </div>
  );
}
