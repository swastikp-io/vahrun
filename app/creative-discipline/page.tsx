"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function CreativeDisciplinePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const filename = "Fred again.. & SOAK - just stand there (15th August 2024).mp3";
    const audioUrl = `${basePath}/${encodeURIComponent(filename)}`;
    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Playback error:", err);
        });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-neutral-100 flex flex-col justify-between p-4 sm:p-6 lg:p-10 pb-24 sm:pb-32 font-sans select-none overflow-y-auto no-scrollbar">
      {/* Top Header Bar */}
      <header className="w-full flex justify-between items-center pb-6 sm:pb-8 flex-shrink-0">
        <Link
          href="/"
          className="text-sm font-mono text-neutral-400 hover:text-white transition-colors"
        >
          /creative-discipline
        </Link>
        <Link
          href="/"
          className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-white px-2.5 py-1"
        >
          &larr; back to home
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 py-2">
        {/* Left Column: Section Tag & Audio Distraction Trigger */}
        <div className="w-full lg:w-[14%] xl:w-[16%] flex-shrink-0 flex flex-col justify-start">
          <span className="text-xs sm:text-sm font-mono text-neutral-500 block pt-1">
            /essay
          </span>
          <button
            onClick={toggleAudio}
            className="text-xs sm:text-sm font-mono text-neutral-400 hover:text-white transition-colors block text-left focus:outline-none cursor-pointer mt-2 lg:mt-[5.2rem]"
          >
            {isPlaying ? "kill distraction" : "/click me and get distracted"}
          </button>
        </div>

        {/* Middle Column: Article Content */}
        <div className="flex-1 space-y-6 max-w-2xl select-text text-[16px] sm:text-[17px] leading-[1.65] text-neutral-300 font-normal">
          {/* Article Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
            I Don't Think I Have One Creative Discipline
          </h1>

          <img
            src="https://i.pinimg.com/736x/5e/f0/42/5ef04287e416a0fa534a696a3f657429.jpg"
            alt="I Don't Think I Have One Creative Discipline"
            className="my-6 block"
          />

          <p>For a while, I thought I had to pick one.</p>
          <p>
            Music producer.<br />
            Designer.<br />
            Developer.<br />
            Video editor.<br />
            Whatever sounded the most convincing at the time.
          </p>
          <p>
            The internet seems to love categories. Put yourself in a box, give the box a nice title, add a profile picture, and suddenly everyone knows what you do.
          </p>
          <p>I’ve never been particularly good at that.</p>
          <p>
            I make music. I design things. I build websites. I edit videos. Sometimes I’ll spend an unreasonable amount of time thinking about a tiny detail that nobody will probably notice.
          </p>
          <p>And for a long time, I thought these things were pulling me in different directions.</p>
          <p>Now I think they’re all part of the same thing.</p>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-6">
            I like making things exist
          </h2>
          <p>That’s probably the simplest way I can describe it.</p>
          <p>I’ll have an idea in my head and immediately want to make it real.</p>
          <p>Sometimes that idea becomes a song.</p>
          <p>Sometimes it becomes a website.</p>
          <p>
            Sometimes it’s a visual, a poster, an animation, a weird little experiment, or a project that probably didn’t need to exist in the first place.
          </p>
          <p>The medium changes. The instinct doesn’t.</p>
          <p>
            I like taking something that is invisible—an emotion, an idea, a feeling, a problem—and giving it a form.
          </p>
          <p>That’s what makes these disciplines feel connected to me.</p>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-6">
            Music taught me to think in layers
          </h2>

          <img
            src="https://i.pinimg.com/736x/fe/0c/fc/fe0cfcc85f4c36eb3fe0888132185be0.jpg"
            alt="Music taught me to think in layers"
            className="my-6 block"
          />
          <p>When I’m making music, I rarely think about a sound in isolation.</p>
          <p>
            A kick changes how the bass feels.<br />
            A texture changes how empty space feels.<br />
            A tiny sound in the background can completely change the character of a section.
          </p>
          <p>Eventually, I started noticing that I was thinking the same way outside music.</p>
          <p>A website has layers too.</p>
          <p>Typography, spacing, movement, images, copy, interaction.</p>
          <p>A video has layers.</p>
          <p>The footage, the cuts, the sound design, the pacing, the silence.</p>
          <p>Even a simple poster has layers.</p>
          <p>Everything is influencing everything else.</p>
          <p>
            Music was probably the first place where I really understood that a good result isn't always about adding more. Sometimes the most important decision is knowing what to remove.
          </p>
          <p>I still use that idea everywhere.</p>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-6">
            Design taught me to care about the things nobody asks for
          </h2>
          <p>Nobody usually asks for the exact spacing between two elements.</p>
          <p>Nobody asks whether a button feels slightly too heavy.</p>
          <p>Nobody notices when a typeface is perfectly suited to the rest of the page.</p>
          <p>But you notice when those things are wrong.</p>
          <p>That’s what I like about design.</p>
          <p>It rewards obsession with details that are almost invisible.</p>
          <p>And that mindset has slowly leaked into everything else I make.</p>
          <p>
            I’ll tweak a sound because it feels 2% too bright.<br />
            I’ll move something three pixels because the composition feels off.<br />
            I’ll rewrite a sentence because it sounds like something a company wrote instead of something a person would say.
          </p>
          <p>These tiny decisions don't always make the work obviously better.</p>
          <p>They just make it feel more intentional.</p>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-6">
            Coding gave me another kind of creativity
          </h2>
          <p>I didn’t initially think of programming as a creative discipline.</p>
          <p>It felt much more logical.</p>
          <p>Rules. Syntax. Components. Functions. Errors.</p>
          <p>Then I started building things.</p>
          <p>And I realised that code is basically another material.</p>
          <p>
            A designer has pixels.<br />
            A musician has sound.<br />
            A developer has logic.
          </p>
          <p>You can use all of them to construct something that didn't exist before.</p>
          <p>There’s also something strangely satisfying about making an idea interactive.</p>
          <p>
            A static image can communicate something.<br />
            A website can respond to you.<br />
            A button can move.<br />
            A page can change.<br />
            An interface can have a personality.
          </p>
          <p>Suddenly, creativity isn't just about what something looks like.</p>
          <p>It’s about what it does.</p>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-6">
            The interesting part happens between the disciplines
          </h2>
          <p>This is probably where most of my favourite ideas come from.</p>
          <p>Not from sitting down and saying, "Today I am going to do design."</p>
          <p>It happens when things overlap.</p>
          <p>
            Music influences how I think about motion.<br />
            Video editing influences how I think about pacing.<br />
            Design influences how I build interfaces.<br />
            Programming influences how I think about systems.
          </p>
          <p>And messing around with all of these things gives me new ways to approach the next thing.</p>
          <p>The disciplines start borrowing from each other.</p>
          <p>
            A transition in a video can work like a musical phrase.<br />
            A website can have rhythm.<br />
            A poster can have silence.<br />
            A song can have visual architecture.<br />
            A product can have a mood.
          </p>
          <p>Once you start looking at things this way, the boundaries become a little less useful.</p>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-6">
            Maybe being "multi-disciplinary" isn't the point
          </h2>
          <p>I don't particularly want to collect skills just so I can list more things on my portfolio.</p>
          <p>I'm more interested in what happens when those skills start talking to each other.</p>
          <p>I don't want to be a person who can do ten things.</p>
          <p>I want to be a person who can look at an idea from ten different angles.</p>
          <p>Sometimes the best solution isn't going to come from the discipline you're currently working in.</p>
          <p>
            A designer might solve a problem with something they learned from music.<br />
            A developer might solve something with a visual idea.<br />
            A musician might discover the answer while editing a video.
          </p>
          <p>That crossover is where things get interesting.</p>

          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-6">
            So, what do I actually do?
          </h2>
          <p>Honestly, I'm still figuring that out.</p>
          <p>
            I make things.<br />
            I experiment.<br />
            I break things.<br />
            I learn something new.
          </p>
          <p>Then I usually start another project before finishing the previous one.</p>
          <p>Maybe that's not the cleanest professional identity.</p>
          <p>But it's probably the most accurate one.</p>
          <p>I don't think creativity needs to have one address.</p>
          <p>For me, music, design, code, video, and everything else are just different languages for the same conversation.</p>
          <p>I'm still learning how to speak all of them.</p>
        </div>

        {/* Right Column Spacer for balance on desktop */}
        <div className="w-full lg:w-[15%] flex-shrink-0 hidden lg:block" />
      </main>
    </div>
  );
}
