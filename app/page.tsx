"use client";

import React, { useState, useEffect } from "react";
import { DESKTOP_ICONS, DesktopIconItem } from "@/data/desktopIcons";
import {
  TRACKS,
  GALLERY_ITEMS,
  Track,
  GalleryItem,
} from "@/data/portfolioData";
import { DesktopIcon } from "@/components/DesktopIcon";
import { FinderWindow } from "@/components/FinderWindow";
import { AudioPlayerWindow } from "@/components/AudioPlayerWindow";
import { QuickLookModal } from "@/components/QuickLookModal";
import { SpotlightSearch } from "@/components/SpotlightSearch";
import { ControlCenter } from "@/components/ControlCenter";
import { AboutMeNoteModal } from "@/components/AboutMeNoteModal";

interface WindowState {
  id: string;
  title: string;
  folderId: string;
  zIndex: number;
}

export default function Home() {
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeZIndex, setActiveZIndex] = useState<number>(100);
  const [activeAudioTrack, setActiveAudioTrack] = useState<Track | null>(null);
  const [activeQuickLookItem, setActiveQuickLookItem] =
    useState<GalleryItem | null>(null);
  const [isAboutMeNoteOpen, setIsAboutMeNoteOpen] = useState<boolean>(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState<boolean>(false);
  const [isControlCenterOpen, setIsControlCenterOpen] =
    useState<boolean>(false);
  const [iconsList, setIconsList] = useState<DesktopIconItem[]>(DESKTOP_ICONS);

  // Always play wewerehere.mp3 automatically when website opens (continuous loop, no pause option)
  useEffect(() => {
    const audio = new Audio("/wewerehere.mp3");
    audio.loop = true;
    audio.volume = 0.85;

    const playAudio = () => {
      audio.play().catch(() => {
        // Autoplay policy fallback: trigger playback on first user interaction
      });
    };

    playAudio();

    const handleFirstInteraction = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      audio.pause();
    };
  }, []);

  // Keyboard shortcut listener (Escape to deselect)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIconId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Desktop click handler to deselect icons and close popups
  const handleDesktopClick = () => {
    setSelectedIconId(null);
    setIsControlCenterOpen(false);
  };

  // Open or focus a folder window
  const openFolderWindow = (folderId: string, title?: string) => {
    const existing = windows.find((w) => w.folderId === folderId);
    const newZ = activeZIndex + 1;
    setActiveZIndex(newZ);

    if (existing) {
      setWindows((prev) =>
        prev.map((w) => (w.folderId === folderId ? { ...w, zIndex: newZ } : w)),
      );
    } else {
      const windowTitle = title || folderId.replace("-", " ");
      setWindows((prev) => [
        ...prev,
        { id: `win-${Date.now()}`, title: windowTitle, folderId, zIndex: newZ },
      ]);
    }
  };

  // Double click icon handler
  const handleIconDoubleClick = (icon: DesktopIconItem) => {
    setSelectedIconId(icon.id);

    if (
      icon.id === "aboutme-txt" ||
      icon.label.toLowerCase() === "aboutme.txt" ||
      icon.label.toLowerCase().includes("about")
    ) {
      setIsAboutMeNoteOpen(true);
    } else if (
      icon.type === "folder" ||
      icon.type === "app" ||
      icon.type === "shortcut"
    ) {
      openFolderWindow(icon.targetFolder || "documents", icon.label);
    } else if (icon.type === "audio") {
      setActiveAudioTrack(TRACKS[0]);
    } else if (icon.type === "image") {
      const matchedGallery = GALLERY_ITEMS.find(
        (g) => g.title === icon.label,
      ) || {
        id: icon.id,
        title: icon.label || "Visual Asset",
        category: "Visual Design",
        aspectRatio: "1/1",
        bgGradient: icon.previewGradient || "from-slate-800 to-indigo-950",
        caption: icon.caption || "Vahrun Creative Asset",
      };
      setActiveQuickLookItem(matchedGallery);
    } else {
      setIsAboutMeNoteOpen(true);
    }
  };

  // Icon single click selection
  const handleIconSelect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIconId(id);
  };

  // Bring window to front
  const focusWindow = (id: string) => {
    const newZ = activeZIndex + 1;
    setActiveZIndex(newZ);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w)),
    );
  };

  // Close window
  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div
      onClick={handleDesktopClick}
      className="relative w-screen h-screen overflow-hidden select-none bg-black font-sans"
    >
      {/* Desktop Background Wallpaper with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-[position:65%_center] sm:bg-center bg-no-repeat transition-transform duration-700 scale-100"
        style={{
          backgroundImage: `url('/ChatGPT%20Image%20Aug%207,%202026,%2005_25_12%20AM.png')`,
        }}
      >
        {/* Subtle Dark Overlay for extra readability */}
        <div className="absolute inset-0 bg-black/20 sm:bg-black/12 backdrop-brightness-[0.98]" />
      </div>

      {/* Desktop Main Workspace Area */}
      <main className="relative w-full h-full overflow-hidden">
        {/* Vahrun Bio Text Overlay (Responsive layout for Mobile, Tablet, Desktop) */}
        <div
          className="absolute top-[28%] xs:top-[31%] sm:top-[34%] left-[4%] sm:left-[4.5%] z-10 select-text text-white leading-[1.55] sm:leading-[1.6] space-y-3.5 sm:space-y-5 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] font-normal tracking-normal drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.95)] max-w-[88vw] xs:max-w-[400px] sm:max-w-[460px] md:max-w-[500px]"
          style={{
            fontFamily:
              'var(--font-dm-sans), "DM Sans", system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Block 1 */}
          <p>Hi, my name is Vahrun.</p>

          {/* Block 2 */}
          <div>
            <p>I'm a music producer from Lucknow.</p>
            <p>I spend an unhealthy amount of time turning random</p>
            <p>ideas into songs and convincing myself "one more tweak"</p>
            <p>will finally finish the mix.</p>
          </div>

          {/* Block 3 - Indented right */}
          <p className="pl-28 xs:pl-36 sm:pl-56 md:pl-64 font-normal">
            It never does.
          </p>

          {/* Block 4 */}
          <div>
            <p>I make music that leans into emotion, texture, and stories</p>
            <p>that feel a little too real. You can find my releases on</p>
            <p>
              <a
                href="https://open.spotify.com/artist/2tRx1njcfoGrTaDPPNj5OK?si=212e8765f5914493"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                Spotify
              </a>
              ,{" "}
              <a
                href="https://music.apple.com/us/artist/vahrun/1745512124"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                Apple Music
              </a>
              , and{" "}
              <a
                href="https://www.youtube.com/@whyrunvahrun"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                YouTube
              </a>
              .
            </p>
          </div>

          {/* Block 5 */}
          <div>
            <p>If you're here to listen, collaborate, or just snoop around,</p>
            <p>you're in the right place.</p>
          </div>
        </div>

        {/* Right Side Tile Floating Social Links (Responsive for Mobile, Tablet & Desktop) */}
        <div
          className="select-text z-20"
          style={{
            fontFamily:
              'var(--font-dm-sans), "DM Sans", system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/2tRx1njcfoGrTaDPPNj5OK?si=212e8765f5914493"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[4%] sm:top-[15%] right-[4%] sm:right-[26%] text-[14px] sm:text-2xl md:text-[28px] font-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] cursor-pointer"
          >
            Spotify
          </a>

          {/* Apple Music */}
          <a
            href="https://music.apple.com/us/artist/vahrun/1745512124"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[9%] sm:top-[28%] right-[4%] sm:right-[9%] text-[14px] sm:text-2xl md:text-[28px] font-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] cursor-pointer"
          >
            Apple Music
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@whyrunvahrun"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[14%] sm:top-[47%] right-[4%] sm:right-[17%] text-[14px] sm:text-2xl md:text-[28px] font-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] cursor-pointer"
          >
            YouTube
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/itsvahrun/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[19%] sm:top-[67%] right-[4%] sm:right-[7%] text-[14px] sm:text-2xl md:text-[28px] font-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] cursor-pointer"
          >
            Instagram
          </a>
        </div>

        {/* Draggable Desktop Icons */}
        {iconsList.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon}
            isSelected={selectedIconId === icon.id}
            onSelect={handleIconSelect}
            onDoubleClick={handleIconDoubleClick}
          />
        ))}

        {/* Finder Windows */}
        {windows.map((win) => (
          <FinderWindow
            key={win.id}
            id={win.id}
            title={win.title}
            folderId={win.folderId}
            zIndex={win.zIndex}
            onClose={closeWindow}
            onFocus={focusWindow}
            onOpenAudioTrack={(track) => setActiveAudioTrack(track)}
            onOpenQuickLookImage={(item) => setActiveQuickLookItem(item)}
            onOpenAboutMeNote={() => setIsAboutMeNoteOpen(true)}
          />
        ))}

        {/* Audio Player Window */}
        {activeAudioTrack && (
          <AudioPlayerWindow
            track={activeAudioTrack}
            zIndex={activeZIndex + 2}
            onClose={() => setActiveAudioTrack(null)}
            onFocus={() => setActiveZIndex(activeZIndex + 3)}
          />
        )}

        {/* Quick Look Image Viewer Modal */}
        <QuickLookModal
          item={activeQuickLookItem}
          zIndex={activeZIndex + 4}
          onClose={() => setActiveQuickLookItem(null)}
          onFocus={() => setActiveZIndex(activeZIndex + 5)}
        />

        {/* About Me Text Note Modal */}
        <AboutMeNoteModal
          isOpen={isAboutMeNoteOpen}
          zIndex={activeZIndex + 6}
          onClose={() => setIsAboutMeNoteOpen(false)}
          onFocus={() => setActiveZIndex(activeZIndex + 7)}
        />
      </main>

      {/* Spotlight Search Bar */}
      <SpotlightSearch
        isOpen={isSpotlightOpen}
        onClose={() => setIsSpotlightOpen(false)}
        onSelectIcon={(icon) => handleIconDoubleClick(icon)}
      />

      {/* Control Center Dropdown Modal */}
      <ControlCenter
        isOpen={isControlCenterOpen}
        onClose={() => setIsControlCenterOpen(false)}
      />
    </div>
  );
}
