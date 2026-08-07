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

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspectRatio: string;
  bgGradient: string;
  caption: string;
}

export interface VideoProject {
  id: string;
  title: string;
  role: string;
  year: string;
  software: string;
  thumbnailGradient: string;
}

export const VAHRUN_BIO = {
  name: "vahrun",
  title: "Music Producer & Visual Artist",
  location: "Lucknow, India",
  description:
    "Crafting soundscapes that blend emotion, texture, and storytelling.",
  tags: ["Music Production", "Sound Design", "Video Editing", "Graphic Design"],
  socials: {
    spotify:
      "https://open.spotify.com/artist/2tRx1njcfoGrTaDPPNj5OK?si=212e8765f5914493",
    appleMusic: "https://music.apple.com/us/artist/vahrun/1745512124",
    youtube: "https://www.youtube.com/@whyrunvahrun",
    instagram: "https://www.instagram.com/itsvahrun/",
    email: "mailto:contact@vahrun.com",
  },
};

export const TRACKS: Track[] = [
  {
    id: "track-1",
    title: "Handling Anti-Performance",
    album: "Single",
    year: "2024",
    duration: "3:42",
    spotifyUrl: "https://open.spotify.com",
    appleMusicUrl: "https://music.apple.com",
    youtubeUrl: "https://youtube.com",
  },
  {
    id: "track-2",
    title: "Lucknow Nights (Texture Vol. 1)",
    album: "Soundscapes EP",
    year: "2023",
    duration: "4:15",
    spotifyUrl: "https://open.spotify.com",
    appleMusicUrl: "https://music.apple.com",
    youtubeUrl: "https://youtube.com",
  },
  {
    id: "track-3",
    title: "Iron Palace",
    album: "Single",
    year: "2023",
    duration: "2:58",
    spotifyUrl: "https://open.spotify.com",
    appleMusicUrl: "https://music.apple.com",
    youtubeUrl: "https://youtube.com",
  },
  {
    id: "track-4",
    title: "Analog Reverie",
    album: "2018 Archive",
    year: "2018",
    duration: "3:10",
    spotifyUrl: "https://open.spotify.com",
    appleMusicUrl: "https://music.apple.com",
    youtubeUrl: "https://youtube.com",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "CONTENT SHOOT.jpg",
    category: "Photography",
    aspectRatio: "4/5",
    bgGradient: "from-slate-800 to-indigo-950",
    caption: "Warehouse Studio Session - Lucknow 2023",
  },
  {
    id: "g2",
    title: "location 2.jpeg",
    category: "Location Scout",
    aspectRatio: "16/9",
    bgGradient: "from-amber-900 to-stone-900",
    caption: "Valley Echoes Sound Location",
  },
  {
    id: "g3",
    title: "IMG_0092.png",
    category: "Design Visual",
    aspectRatio: "1/1",
    bgGradient: "from-cyan-900 to-blue-950",
    caption: "Cover Artwork Concept #2",
  },
  {
    id: "g4",
    title: "0W SET1.jpg",
    category: "Behind The Scenes",
    aspectRatio: "4/3",
    bgGradient: "from-zinc-800 to-neutral-950",
    caption: "Modular Synthesizer & Pedalboard Setup",
  },
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "v1",
    title: "IMG_0093.mov",
    role: "Director & Editor",
    year: "2023",
    software: "Adobe After Effects / Premiere",
    thumbnailGradient: "from-purple-900 to-black",
  },
  {
    id: "v2",
    title: "Handling Anti-Performance Visualizer",
    role: "Music & Motion Graphics",
    year: "2024",
    software: "After Effects 2020",
    thumbnailGradient: "from-blue-900 to-slate-950",
  },
];
