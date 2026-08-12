"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, Check } from "lucide-react";

export default function WorkWithMePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactMode, setContactMode] = useState("Email");
  const [describeOption, setDescribeOption] = useState("artist");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const contactModes = ["Email", "Phone", "Discord", "Zoom/Google Meet"];

  const describeOptions = [
    { label: "artist", value: "artist" },
    { label: "producer", value: "producer" },
    { label: "songwriter", value: "songwriter" },
    { label: "label", value: "label" },
    { label: "audio company", value: "audio company" },
  ];

  const servicesOptions = [
    "Full Production",
    "Production",
    "Mixing",
    "Mastering",
    "remixing",
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const userName = name.trim() || "[Name]";
    const userRole = describeOption || "[Role]";
    const userServices =
      selectedServices.length > 0
        ? selectedServices.join(", ")
        : "[Services]";
    const userDetails =
      message.trim() || "[Project details]";
    const userEmail = email.trim() || "[Email]";
    const userContactMode = contactMode || "[Preferred Contact Mode]";

    const formattedText = `Hey Vahrun! I’d love to work with you.

I’m ${userName}, and I’m a ${userRole}.

I’m reaching out about ${userServices}.

Here’s a little about what I’m working on:

${userDetails}

You can reach me at ${userEmail}, and I’d prefer to connect via ${userContactMode}.

Looking forward to talking about it.

— ${userName}`;

    const whatsappNumber = "919580997154";
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      formattedText
    )}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 flex flex-col justify-between p-4 sm:p-6 lg:p-10 pb-24 sm:pb-32 font-sans select-none overflow-y-auto no-scrollbar">
      {/* Top Header Bar */}
      <header className="w-full flex justify-between items-center pb-6 sm:pb-8 flex-shrink-0">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold tracking-tight text-black hover:text-neutral-600 transition-colors select-text"
        >
          vahrun.com
        </Link>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-black transition-colors border border-neutral-300 hover:border-black px-2.5 py-1 cursor-pointer"
        >
          &larr; back to home
        </Link>
      </header>

      {/* Main Grid Content */}
      <main className="flex-1 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 py-2">
        {/* Left Column: Section Tag */}
        <div className="w-full lg:w-[16%] flex-shrink-0">
          <span className="text-xs sm:text-sm font-mono text-neutral-500 block pt-1 select-text">
            /work-with-me
          </span>
        </div>

        {/* Right Column: Form Container */}
        <div className="flex-1 max-w-2xl select-text space-y-8">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-normal text-black tracking-tight leading-snug">
              work with me
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Fill out the details below to share your project goals or audio inquiry. Submitting will open WhatsApp with your formatted message directly.
            </p>
          </div>

          <form onSubmit={handleSendToWhatsApp} className="space-y-7 pt-2">
            {/* 1. Name */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium">
                1. Name <span className="text-neutral-400">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black px-4 py-3 text-sm transition-colors rounded-none font-sans"
              />
            </div>

            {/* 2. Email */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium">
                2. Email <span className="text-neutral-400">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@domain.com"
                className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black px-4 py-3 text-sm transition-colors rounded-none font-sans"
              />
            </div>

            {/* 3. Preferred Mode of Contact */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium">
                3. Preferred Mode of Contact
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {contactModes.map((mode) => {
                  const isSelected = contactMode === mode;
                  return (
                    <button
                      type="button"
                      key={mode}
                      onClick={() => setContactMode(mode)}
                      className={`px-3 py-2.5 text-xs font-mono transition-all text-center cursor-pointer ${
                        isSelected
                          ? "bg-black text-white border border-black font-medium"
                          : "bg-neutral-50 text-neutral-600 border border-neutral-200 hover:border-neutral-400 hover:text-black"
                      }`}
                    >
                      {mode}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. What best describes you? */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium">
                4. What best describes you?
              </label>
              <div className="flex flex-wrap gap-2">
                {describeOptions.map((opt) => {
                  const isSelected = describeOption === opt.value;
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setDescribeOption(opt.value)}
                      className={`px-4 py-2 text-xs font-mono transition-all cursor-pointer ${
                        isSelected
                          ? "bg-black text-white border border-black font-medium"
                          : "bg-neutral-50 text-neutral-600 border border-neutral-200 hover:border-neutral-400 hover:text-black"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. What services are you looking for? */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium">
                5. What services are you looking for?
              </label>
              <div className="flex flex-wrap gap-2">
                {servicesOptions.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? "bg-black text-white border border-black font-medium"
                          : "bg-neutral-50 text-neutral-600 border border-neutral-200 hover:border-neutral-400 hover:text-black"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 6. What can I do for you? */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 font-medium">
                6. What can I do for you? Include as much information as possible
              </label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project, timeline, reference tracks, stems availability, budget, or specific requests..."
                className="w-full bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black p-4 text-sm transition-colors rounded-none font-sans"
              />
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white font-mono uppercase tracking-wider font-semibold text-xs py-3.5 px-8 border border-black transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99]"
              >
                <span>Send to whatsapp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
