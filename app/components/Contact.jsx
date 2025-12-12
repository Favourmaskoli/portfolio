"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { assets } from "../../assets/assets";

// Reusable Contact Pill Component
const ContactPill = ({ icon: Icon, title, text, href }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 p-4 border rounded-lg 
                 hover:bg-gray-100 dark:hover:bg-[#1f1f1f]
                 border-gray-300 dark:border-gray-700 transition"
    >
      <div className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full">
        <Icon size={20} className="text-black dark:text-white" />
      </div>
      <div>
        <p className="font-semibold text-black dark:text-white">{title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
      </div>
    </Link>
  );
};

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "7f2e4710-9df5-4b6d-8a78-9f88a7e9a621");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-black dark:text-white transition">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Have a project in mind, want to collaborate, or simply want to say hello?  
          Feel free to reach out.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center mt-10">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-black/80 dark:border-white/50">
          <Image
            src={assets.favprofile}
            alt="Favour Maskoli"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
      </div>

      {/* Contact Pills */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <ContactPill icon={Phone} title="Phone" text="+234 901 490 7056" href="tel:+2349014907056" />
        <ContactPill icon={Mail} title="Email" text="wisefav6@gmail.com" href="mailto:wisefav6@gmail.com" />
        <ContactPill icon={MapPin} title="Location" text="Port Harcourt, Nigeria" href="https://maps.google.com/?q=Port+Harcourt+Nigeria" />
      </div>

      {/* Contact Form */}
      <div className="border rounded-lg p-8 mt-16 shadow-sm border-gray-300 dark:border-gray-700 bg-white dark:bg-[#121212]">
        <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-gray-200">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg bg-white dark:bg-[#1f1f1f]
                         border-gray-300 dark:border-gray-700 text-black dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-gray-200">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg bg-white dark:bg-[#1f1f1f]
                         border-gray-300 dark:border-gray-700 text-black dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black dark:text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-3 border rounded-lg bg-white dark:bg-[#1f1f1f]
                         border-gray-300 dark:border-gray-700 text-black dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black
                       py-3 rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-gray-200 transition"
          >
            Send Message
          </button>

          {result && (
            <p className="mt-2 text-sm text-center text-green-500 dark:text-green-400">
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
