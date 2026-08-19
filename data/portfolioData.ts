export interface Track {
  id: string;
  title: string;
  album: string;
  year: string;
  duration: string;
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
  audioUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  type: "music" | "design" | "video" | "product";
  description: string;
  year: string;
  link?: string;
  linkLabel?: string;
}

export interface PlottingItem {
  id: string;
  title: string;
  status: string;
  description: string;
  expectedDate?: string;
}


export const VAHRUN_BIO = {
  name: "vahrun",
  title: "Music Producer & Creative Developer",
  location: "Lucknow, India",
  description:
    "vahrun is a music producer and creative developer based in Lucknow, turning ideas into sounds and things.",
  fullBio:
    "vahrun is a music producer and creative developer based in Lucknow, turning ideas into sounds and things. Blending textured soundscapes, tactile physical gear aesthetics, and modern web software engineering to create immersive audiovisual tools and audio compositions.",
  tags: [
    "Music Production",
    "Design Engineering",
    "Sound Design",
    "Video Editing",
    "Interface Design",
  ],
  socials: {
    spotify:
      "https://open.spotify.com/artist/2tRx1njcfoGrTaDPPNj5OK?si=212e8765f5914493",
    appleMusic: "https://music.apple.com/us/artist/vahrun/1745512124",
    youtube: "https://www.youtube.com/@whyrunvahrun",
    instagram: "https://www.instagram.com/itsvahrun/",
    shop: "https://vahrun.gumroad.com",
    email: "mailto:contact@vahrun.com",
  },
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "room - reimagine your new tab",
    type: "product",
    description: "A browser extension that replaces your default new tab page with a calm, ad-free stream of images.",
    year: "2024",
    link: "/room",
    linkLabel: "View Project",
  },
  {
    id: "p2",
    title: "Lucknow Nights (Texture Vol. 1)",
    type: "music",
    description: "Atmospheric Soundscapes EP captured across ambient field recordings and analog synths.",
    year: "2023",
    link: "https://music.apple.com/us/artist/vahrun/1745512124",
    linkLabel: "Listen on Apple Music",
  },
  {
    id: "p3",
    title: "vahrun audio & design shop",
    type: "product",
    description: "Custom sound kits, sample packs, design presets, and digital assets.",
    year: "2024",
    link: "https://vahrun.gumroad.com",
    linkLabel: "Visit Shop",
  },
  {
    id: "p4",
    title: "Iron Palace Visualizer",
    type: "video",
    description: "Experimental motion visualizer made with Premiere & After Effects.",
    year: "2023",
    link: "https://www.youtube.com/@whyrunvahrun",
    linkLabel: "Watch on YouTube",
  },
];

export const PLOTTING_ITEMS: PlottingItem[] = [
  {
    id: "plot-1",
    title: "Unreleased Ambient Tape Project",
    status: "In Progress (Mixing)",
    description: "A cassette-length ambient soundscape project crafted with cassette loops, granular synths, and field recordings.",
    expectedDate: "Fall 2026",
  },
  {
    id: "plot-2",
    title: "Custom Tactile MIDI Controller",
    status: "Hardware Prototype Phase",
    description: "Designing a custom physical knob unit tailored for sound design parameter modulation.",
    expectedDate: "Late 2026",
  },
  {
    id: "plot-3",
    title: "Interactive Web Audio Synthesizer",
    status: "R&D",
    description: "A minimal web-based browser synth UI for live audio manipulation.",
    expectedDate: "2026",
  },
];

