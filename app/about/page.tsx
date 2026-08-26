"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-black text-neutral-100 flex flex-col p-4 sm:p-6 lg:p-10 pb-24 sm:pb-32 font-sans select-none overflow-y-auto">
      {/* Top Header Bar */}
      <header className="w-full flex justify-between items-center pb-6 sm:pb-8 flex-shrink-0">
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-neutral-400 transition-colors select-text"
        >
          vahrun.com
        </Link>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors border border-neutral-700 hover:border-white px-2.5 py-1"
        >
          &larr; back to home
        </Link>
      </header>

      {/* Main Grid Container with Label-to-Content Alignment */}
      <main className="flex-1 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 py-2">
        {/* Left Content Sections */}
        <div className="flex-1 space-y-10 sm:space-y-12 max-w-4xl select-text">
          {/* Section 1: /about */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6 lg:gap-10">
            <div className="w-full sm:w-28 lg:w-36 flex-shrink-0 text-xs sm:text-sm font-mono text-neutral-500 pt-0.5">
              <span>/about</span>
            </div>
            <div className="flex-1 space-y-4 text-[15.5px] sm:text-[17px] leading-[1.65] text-neutral-300 font-normal">
              <p>
                Hi! My name is Swastik — I make music under the name vahrun.

                Welcome to my corner of the internet. Swastik is the name behind the development,
                design, and things I build. vahrun is the name I use for music — the part of my
                work that revolves around sound, songwriting, production, and experimentation.
              </p>
              <p>
                I spend most of my time creating stuff. When I’m not doing that, I go on
                walks, journal, cook, and listen to music (lately: OAFF, sudan, Fred again..., demotapes and many more).
                Born and raised in Lucknow.
              </p>
            </div>
          </div>

          {/* Section 2: my interests */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6 lg:gap-10">
            <div className="w-full sm:w-28 lg:w-36 flex-shrink-0 text-xs sm:text-sm font-mono text-neutral-500 pt-0.5">
              <span>my interests</span>
            </div>
            <div className="flex-1 space-y-1.5 text-[15.5px] sm:text-[17px] text-neutral-300 font-normal">
              <p>
                music production
              </p>
              <p>web development</p>
              <p>sound design</p>


              <p>journaling</p>
              <p>graphic design</p>

            </div>
          </div>

          {/* Section 3: hire me */}
          <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6 lg:gap-10 pt-2">
            <div className="w-full sm:w-28 lg:w-36 flex-shrink-0 text-xs sm:text-sm font-mono text-neutral-500 pt-0.5">
              <span>hire me</span>
            </div>
            <div className="flex-1 text-[15.5px] sm:text-[17px] leading-[1.65] text-neutral-300 font-normal max-w-xl">
              <p>
                Currently open to freelance work across web development, design, video editing, and music production. I build and ship full-stack products, create visual content, edit videos, and produce music. If you’re working on something interesting,{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=music.swastikpatel@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 font-medium text-white hover:text-neutral-300 transition-colors"
                >
                  email
                </a>{" "}
                me and let’s talk.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Photo */}
        <div className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0 flex flex-col gap-6 pt-2 lg:pt-0 pb-12 sm:pb-20">
          {/* Portrait Photo */}
          <div className="w-full h-[220px] sm:h-[260px] lg:h-[240px] bg-neutral-900 overflow-hidden relative border border-neutral-800">
            <img
              src="https://i.pinimg.com/1200x/3b/e9/02/3be9022148ed3658d76267366a1e8694.jpg"
              alt="vahrun"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
