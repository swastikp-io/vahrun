import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "projects | vahrun",
  description:
    "A list of projects, apps, and websites that I've worked on by vahrun.",
};

export default function ProjectsPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const projectsGrid = [
    {
      id: "fretctrl",
      title: "fretctrl [under development]",
      category: "web",
      image: "https://i.pinimg.com/1200x/4a/75/f2/4a75f294b16d1fa8471f6e365ffb80e1.jpg",
      video: null,
      href: "/fretctrl",
      isExternal: false,
    },
    {
      id: "social-klub",
      title: "The Social कlub",
      category: "web",
      image: "https://i.pinimg.com/736x/1b/94/7f/1b947fa55f81f43a186e7583c193ae16.jpg",
      video: `${basePath}/Video-580.mp4`,
      href: "https://thesocialklub.online/",
      isExternal: true,
    },
    {
      id: "analog-reverie",
      title: "analog reverie",
      category: "web",
      image: "https://i.pinimg.com/736x/7c/8f/a1/7c8fa12a9fe579157638a5909b68b927.jpg",
      video: null,
      href: `${basePath}/projects/analogreverie`,
      isExternal: true,
    },
    {
      id: "work-with-me",
      title: "work with me",
      category: "web",
      image: "https://i.pinimg.com/736x/1a/a0/18/1aa018341e5c78fa24b40a0fcdcfe7c9.jpg",
      video: null,
      href: "/work-with-me",
      isExternal: false,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-neutral-100 flex flex-col justify-between p-4 sm:p-6 lg:p-10 pb-24 sm:pb-32 font-sans select-none overflow-y-auto no-scrollbar">
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
          className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-white px-2.5 py-1"
        >
          &larr; back to home
        </Link>
      </header>

      {/* Main Grid Content */}
      <main className="flex-1 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 py-2">
        {/* Left Column: Section Tag */}
        <div className="w-full lg:w-[12%] flex-shrink-0">
          <span className="text-xs sm:text-sm font-mono text-neutral-500 block pt-1">
            /projects
          </span>
        </div>

        {/* Middle Column: Headline & 2x2 Grid Matching Reference Image */}
        <div className="flex-1 space-y-6 max-w-4xl select-text">
          {/* Main Headline */}
          <h1 className="text-xl sm:text-2xl md:text-[26px] font-normal text-white tracking-tight leading-relaxed">
            A list of projects, apps, and websites that I’ve worked on
          </h1>

          {/* 2-Column Grid of Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-4">
            {projectsGrid.map((item) => {
              const CardContent = (
                <div className="group cursor-pointer flex flex-col">
                  {/* Aspect-Ratio Preview Container */}
                  <div className="w-full aspect-[4/3] bg-neutral-900 overflow-hidden relative border border-neutral-800 shadow-xs group-hover:shadow-md transition-shadow">
                    {item.video ? (
                      <video
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover block group-hover:scale-103 transition-transform duration-300"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover block group-hover:scale-103 transition-transform duration-300"
                      />
                    )}
                  </div>

                  {/* Card Title & Category Label Row */}
                  <div className="flex items-center gap-2 pt-2.5 text-sm sm:text-[15px]">
                    <span className="font-semibold text-white group-hover:underline underline-offset-4">
                      {item.title}
                    </span>
                    <span className="text-neutral-500 font-mono">/</span>
                    <span className="text-neutral-400 font-mono text-xs sm:text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              );

              const isHttp = item.href.startsWith("http://") || item.href.startsWith("https://");
              return item.isExternal ? (
                <a
                  key={item.id}
                  href={item.href}
                  target={isHttp ? "_blank" : "_self"}
                  rel={isHttp ? "noopener noreferrer" : undefined}
                >
                  {CardContent}
                </a>
              ) : (
                <Link key={item.id} href={item.href}>
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Column: Freelance & Contact Copy */}
        <div className="w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 pt-1 lg:pt-2 pb-12 sm:pb-20 select-text">
          <p className="text-[15px] sm:text-[16px] leading-[1.65] text-neutral-300 font-normal">
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
      </main>
    </div>
  );
}
