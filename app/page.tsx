"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  VAHRUN_BIO,
  PROJECTS,
  PLOTTING_ITEMS,
  ARCHIVE_ITEMS,
} from "@/data/portfolioData";

type ModalType =
  | "projects"
  | "whoiam"
  | "plotting"
  | "archives"
  | "now"
  | "music"
  | "prev"
  | "posts"
  | null;

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [heroImage, setHeroImage] = useState<string>(
    "https://i.pinimg.com/736x/ba/51/89/ba518964022bf237fa6123e3abb280cf.jpg"
  );

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen lg:h-screen w-full bg-black text-neutral-100 flex flex-col justify-between p-4 sm:p-6 lg:p-8 font-sans select-none overflow-y-auto lg:overflow-hidden no-scrollbar">
      {/* Top Header Bar */}
      <header className="w-full flex justify-between items-center pb-3 flex-shrink-0">
        {/* Top Left: Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white select-text">
          vahrun.com
        </h1>
      </header>

      {/* Main Container - Fully Responsive Grid/Flex */}
      <main className="flex-1 w-full flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12 min-h-0 py-2 lg:overflow-hidden">
        {/* Left Column: Feature Image */}
        <div className="w-full lg:w-[60%] xl:w-[66%] h-[320px] sm:h-[450px] lg:h-full flex-shrink-0 relative bg-neutral-950 overflow-hidden flex items-center justify-center border border-neutral-900">
          <img
            src={heroImage}
            alt="vahrun"
            className="w-full h-full object-cover block transition-all duration-300"
          />
        </div>

        {/* Right Column: Heading, Text Links & Things Change list */}
        <div className="w-full lg:w-[40%] xl:w-[34%] lg:h-full lg:min-h-0 flex flex-col justify-between py-1 lg:overflow-y-auto select-text pr-1 gap-6 lg:gap-0 no-scrollbar">
          {/* Top Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Main Headline */}
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-bold leading-[1.18] text-white tracking-tight">
              Vahrun is a music producer and creative developer based in Lucknow.
            </h2>

            {/* Paragraph with inline underlined links */}
            <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.55] text-neutral-300 font-normal">
              Explore{" "}
              <Link
                href="/projects"
                className="underline underline-offset-4 font-normal text-white hover:text-neutral-400 focus:outline-none cursor-pointer"
              >
                my projects
              </Link>
              ,{" "}
              <Link
                href="/about"
                className="underline underline-offset-4 font-normal text-white hover:text-neutral-400 focus:outline-none cursor-pointer"
              >
                learn about me
              </Link>
              ,{" "}
              <button
                onClick={() => setActiveModal("plotting")}
                className="underline underline-offset-4 font-normal text-white hover:text-neutral-400 focus:outline-none cursor-pointer"
              >
                see what I’m working on
              </button>
              , or{" "}
              <button
                onClick={() => setActiveModal("archives")}
                className="underline underline-offset-4 font-normal text-white hover:text-neutral-400 focus:outline-none cursor-pointer"
              >
                browse the archives
              </button>
              .
            </p>
          </div>

          {/* Bottom Section: things change list */}
          <div className="mt-4 sm:mt-6 pt-2">
            <button
              onMouseEnter={() => {
                setHeroImage(
                  "https://i.pinimg.com/736x/ba/51/89/ba518964022bf237fa6123e3abb280cf.jpg"
                );
              }}
              onClick={() => {
                setHeroImage(
                  "https://i.pinimg.com/736x/ba/51/89/ba518964022bf237fa6123e3abb280cf.jpg"
                );
              }}
              className="text-xs sm:text-[13px] font-semibold text-neutral-400 hover:text-white mb-2 tracking-tight transition-colors cursor-pointer text-left focus:outline-none"
            >
              things change
            </button>

            <div className="flex flex-col gap-1.5 sm:gap-1 text-sm sm:text-[15px] text-neutral-500">
              <button
                onMouseEnter={() => {
                  setHeroImage(
                    "https://i.pinimg.com/736x/1b/94/7f/1b947fa55f81f43a186e7583c193ae16.jpg"
                  );
                }}
                onClick={() => {
                  setHeroImage(
                    "https://i.pinimg.com/736x/1b/94/7f/1b947fa55f81f43a186e7583c193ae16.jpg"
                  );
                }}
                className="text-left hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                handling anti-performance
              </button>
              <Link
                href="/fretctrl"
                onMouseEnter={() => {
                  setHeroImage(
                    "https://i.pinimg.com/1200x/cf/74/01/cf7401b52f90708569cbfaae9b36cf61.jpg"
                  );
                }}
                className="text-left hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                fretctrl [under development]
              </Link>
              <a
                href={`${basePath}/analogreverie`}
                onMouseEnter={() => {
                  setHeroImage(
                    "https://i.pinimg.com/736x/7c/8f/a1/7c8fa12a9fe579157638a5909b68b927.jpg"
                  );
                }}
                className="text-left hover:text-white transition-colors focus:outline-none cursor-pointer block"
              >
                analog reverie
              </a>
              <button
                onMouseEnter={() => {
                  setHeroImage(
                    "https://i.pinimg.com/736x/1b/94/7f/1b947fa55f81f43a186e7583c193ae16.jpg"
                  );
                }}
                onClick={() => setActiveModal("projects")}
                className="text-left hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                soundscapes ep
              </button>
              <button
                onMouseEnter={() => {
                  setHeroImage(
                    "https://i.pinimg.com/736x/ba/51/89/ba518964022bf237fa6123e3abb280cf.jpg"
                  );
                }}
                onClick={() => setActiveModal("projects")}
                className="text-left hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                custom tactile midi controller
              </button>
              <button
                onMouseEnter={() => {
                  setHeroImage(
                    "https://i.pinimg.com/736x/ba/51/89/ba518964022bf237fa6123e3abb280cf.jpg"
                  );
                }}
                onClick={() => setActiveModal("whoiam")}
                className="text-left hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                sound design & hardware r&d
              </button>
              <button
                onMouseEnter={() => {
                  setHeroImage(
                    "https://i.pinimg.com/736x/ba/51/89/ba518964022bf237fa6123e3abb280cf.jpg"
                  );
                }}
                onClick={() => setActiveModal("projects")}
                className="text-left hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                gumroad audio presets
              </button>
              <button
                onMouseEnter={() => {
                  setHeroImage(
                    "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/13/5f/91/135f918d-0515-fb9f-b4f8-97c0989daee9/199538692631.jpg/592x592bb.webp"
                  );
                }}
                onClick={() => setActiveModal("music")}
                className="text-left hover:text-white transition-colors focus:outline-none cursor-pointer"
              >
                motion visualizer works
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Dialog Overlays */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-neutral-900 text-neutral-100 w-full max-w-2xl max-h-[85vh] overflow-y-auto p-5 sm:p-8 md:p-10 border border-neutral-800 shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-4 mb-6 border-b border-neutral-800">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                {activeModal === "projects" && "[ projects & portfolio ]"}
                {(activeModal === "whoiam" || activeModal === "posts") &&
                  "[ about & bio ]"}
                {(activeModal === "plotting" || activeModal === "now") &&
                  "[ now / up to ]"}
                {(activeModal === "archives" || activeModal === "prev") &&
                  "[ archives / was up to ]"}
                {activeModal === "music" && "[ music & releases ]"}
              </h2>
              <button
                onClick={() => setActiveModal(null)}
                className="text-xs uppercase tracking-wider font-mono text-neutral-400 hover:text-white transition-colors focus:outline-none border border-neutral-700 hover:border-white px-2.5 py-1 cursor-pointer"
              >
                close [esc]
              </button>
            </div>

            {/* Modal Content - Projects / Portfolio */}
            {activeModal === "projects" && (
              <div className="space-y-6">
                <p className="text-sm text-neutral-400">
                  Selected audio releases, design tools, and visual projects:
                </p>
                <div className="divide-y divide-neutral-800">
                  {PROJECTS.map((project) => (
                    <div
                      key={project.id}
                      className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-white">
                            {project.title}
                          </h3>
                          <span className="text-[11px] font-mono bg-neutral-800 text-neutral-300 px-1.5 py-0.5 uppercase">
                            {project.type}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-400">
                          {project.description}
                        </p>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-white hover:underline flex-shrink-0 mt-1 sm:mt-0"
                        >
                          {project.linkLabel || "View project"} &rarr;
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Content - Music */}
            {activeModal === "music" && (
              <div className="space-y-6">
                <p className="text-sm text-neutral-400">
                  Listen to latest music releases and soundscapes:
                </p>
                <div className="space-y-4">
                  {PROJECTS.filter((p) => p.type === "music").map((project) => (
                    <div
                      key={project.id}
                      className="p-4 border border-neutral-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                    >
                      <div>
                        <h3 className="font-bold text-white text-lg">
                          {project.title}
                        </h3>
                        <p className="text-sm text-neutral-400">
                          {project.description}
                        </p>
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors"
                        >
                          Listen &rarr;
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Content - Who I Am / About / Posts */}
            {(activeModal === "whoiam" || activeModal === "posts") && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-base text-neutral-100 leading-relaxed">
                    {VAHRUN_BIO.fullBio}
                  </p>
                  <p className="text-sm text-neutral-400">
                    Based in Lucknow, India.
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Connect & Platforms
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <a
                      href={VAHRUN_BIO.socials.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:underline flex items-center gap-1.5"
                    >
                      Spotify &rarr;
                    </a>
                    <a
                      href={VAHRUN_BIO.socials.appleMusic}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:underline flex items-center gap-1.5"
                    >
                      Apple Music &rarr;
                    </a>
                    <a
                      href={VAHRUN_BIO.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:underline flex items-center gap-1.5"
                    >
                      YouTube &rarr;
                    </a>
                    <a
                      href={VAHRUN_BIO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:underline flex items-center gap-1.5"
                    >
                      Instagram &rarr;
                    </a>
                    <a
                      href={VAHRUN_BIO.socials.shop}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:underline flex items-center gap-1.5"
                    >
                      Gumroad Shop &rarr;
                    </a>
                    <a
                      href={VAHRUN_BIO.socials.email}
                      className="text-sm text-white hover:underline flex items-center gap-1.5"
                    >
                      Contact Email &rarr;
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Disciplines
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {VAHRUN_BIO.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-neutral-800 text-neutral-200 px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Content - Now / Plotting */}
            {(activeModal === "plotting" || activeModal === "now") && (
              <div className="space-y-6">
                <p className="text-sm text-neutral-400">
                  Active experiments, upcoming releases, and design hardware work-in-progress:
                </p>
                <div className="divide-y divide-neutral-800">
                  {PLOTTING_ITEMS.map((item) => (
                    <div key={item.id} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <span className="text-[11px] font-mono bg-white text-black px-2 py-0.5">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-400">{item.description}</p>
                      {item.expectedDate && (
                        <p className="text-xs text-neutral-500 font-mono">
                          Target timeline: {item.expectedDate}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Content - Archives / Prev */}
            {(activeModal === "archives" || activeModal === "prev") && (
              <div className="space-y-6">
                <p className="text-sm text-neutral-400">
                  Explorations from previous years, tape demos, and studio archives:
                </p>
                <div className="divide-y divide-neutral-800">
                  {ARCHIVE_ITEMS.map((item) => (
                    <div key={item.id} className="py-4 first:pt-0 last:pb-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <span className="text-xs font-mono text-neutral-500">{item.year}</span>
                      </div>
                      <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                        {item.category}
                      </span>
                      <p className="text-sm text-neutral-400 pt-0.5">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
