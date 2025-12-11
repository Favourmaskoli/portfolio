"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { assets } from "../../assets/assets";

// Reusable Contact Item (light/dark mode)
const ContactPill = ({ icon: Icon, title, text, href }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 p-4 border rounded-lg 
                 hover:bg-gray-100 dark:hover:bg-[#1f1f1f]
                 border-gray-300 dark:border-gray-700
                 transition"
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
  return (
    <section
      className="max-w-4xl mx-auto px-6 py-16 
                        text-black dark:text-white 
                        transition"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p
          className="mt-4 max-w-2xl mx-auto 
                       text-gray-600 dark:text-gray-300"
        >
          Have a project in mind, want to collaborate, or simply want to say
          hello? I'm always open to new conversations. Reach out through any of
          the options below.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center mt-10">
        <div
          className="relative w-32 h-32 rounded-full overflow-hidden 
                        border-4 border-black/80 dark:border-white/50"
        >
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
        <ContactPill
          icon={Phone}
          title="Phone"
          text="+234 813 456 7890"
          href="tel:+2348134567890"
        />

        <ContactPill
          icon={Mail}
          title="Email"
          text="wisefav6@gmail.com"
          href="mailto:wisefav6@gmail.com"
        />

        <ContactPill
          icon={MapPin}
          title="Location"
          text="Port Harcourt, Nigeria"
          href="https://maps.google.com/?q=Port+Harcourt+Nigeria"
        />
      </div>

      {/* Contact Form */}
      <div
        className="border rounded-lg p-8 mt-16 shadow-sm 
                      border-gray-300 dark:border-gray-700 
                      bg-white dark:bg-[#121212]"
      >
        <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>

        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium mb-1 
                               text-black dark:text-gray-200"
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg 
                         bg-white dark:bg-[#1f1f1f]
                         border-gray-300 dark:border-gray-700
                         text-black dark:text-white"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1 
                               text-black dark:text-gray-200"
            >
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg 
                         bg-white dark:bg-[#1f1f1f]
                         border-gray-300 dark:border-gray-700
                         text-black dark:text-white"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1 
                               text-black dark:text-gray-200"
            >
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full p-3 border rounded-lg 
                         bg-white dark:bg-[#1f1f1f]
                         border-gray-300 dark:border-gray-700
                         text-black dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black dark:bg-white 
                       text-white dark:text-black
                       py-3 rounded-lg font-semibold 
                       hover:bg-gray-900 dark:hover:bg-gray-200
                       transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
