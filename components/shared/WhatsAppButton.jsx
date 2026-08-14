"use client";

import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "923042024999";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 animate-bounce hover:-translate-y-0.5 hover:shadow-xl"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
