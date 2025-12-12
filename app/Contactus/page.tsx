"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const msg = formData.get("message") as string;

    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      message: msg,
    });

    setLoading(false);

    if (error) {
      setMessage("Something went wrong. Please try again.");
    } else {
      setMessage("Message sent successfully!");
      form.reset();
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#0A1E3D",     // 💙 DARK BLUE BACKGROUND
        color: "white",            // 🤍 WHITE TEXT
      }}
    >
      <div className="p-8 rounded-lg max-w-md w-full"
           style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(4px)" }}>
        
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-transparent border border-white/30 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-transparent border border-white/30 text-white"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full p-3 rounded bg-transparent border border-white/30 text-white"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 mt-4 rounded bg-white text-blue-900 font-bold hover:bg-blue-200 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

        {message && (
          <p className="mt-4 text-center text-white font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
}