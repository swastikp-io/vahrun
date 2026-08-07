"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Folder,
  FileText,
  Music,
  Image as ImageIcon,
  Film,
  Download,
  Search,
  Grid,
  List as ListIcon,
  Columns,
  ExternalLink,
  Play,
  Heart,
  HardDrive,
} from "lucide-react";
import {
  VAHRUN_BIO,
  TRACKS,
  GALLERY_ITEMS,
  VIDEO_PROJECTS,
  Track,
  GalleryItem,
  VideoProject,
} from "@/data/portfolioData";
import { MacFolderIcon, MacDocIcon, MacAudioIcon, MacImageThumbnail, MacVideoThumbnail } from "./MacIcons";

export interface FinderWindowProps {
  id: string;
  title: string;
  folderId: string;
  zIndex: number;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onOpenAudioTrack?: (track: Track) => void;
  onOpenQuickLookImage?: (item: GalleryItem) => void;
  onOpenAboutMeNote?: () => void;
}

export function FinderWindow({
  id,
  title,
  folderId,
  zIndex,
  onClose,
  onFocus,
  onOpenAudioTrack,
  onOpenQuickLookImage,
  onOpenAboutMeNote,
}: FinderWindowProps) {
  const [activeTab, setActiveTab] = useState<string>(folderId || "documents");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sidebarFavorites = [
    { id: "documents", label: "Documents", icon: FileText },
    { id: "photos", label: "Photos", icon: ImageIcon },
    { id: "music", label: "Music Tracks", icon: Music },
    { id: "imovie-projects", label: "Videos & Edits", icon: Film },
    { id: "downloads", label: "Downloads", icon: Download },
    { id: "archive-2018", label: "2018 Archive", icon: HardDrive },
  ];

  const renderFolderContent = () => {
    switch (activeTab) {
      case "photos":
        return (
          <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenQuickLookImage?.(item)}
                className="group flex flex-col items-center p-3 rounded-lg hover:bg-blue-600/10 cursor-pointer transition-all border border-transparent hover:border-blue-500/30"
              >
                <MacImageThumbnail
                  gradient={item.bgGradient}
                  className="w-24 h-24 mb-2 group-hover:scale-105 transition-transform"
                />
                <span className="text-xs font-medium text-slate-800 dark:text-slate-200 text-center line-clamp-1">
                  {item.title}
                </span>
                <span className="text-[10px] text-slate-500 text-center">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        );

      case "music":
        return (
          <div className="p-4 space-y-2">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Vahrun Releases & Soundscapes
            </h3>
            {TRACKS.map((track) => (
              <div
                key={track.id}
                onClick={() => onOpenAudioTrack?.(track)}
                className="flex items-center justify-between p-3 rounded-lg bg-slate-100/60 dark:bg-slate-800/60 hover:bg-blue-600 hover:text-white group cursor-pointer transition-all border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-sm group-hover:scale-105">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold group-hover:text-white">
                      {track.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-blue-100">
                      {track.album} • {track.year}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-400 group-hover:text-white">
                  <span>{track.duration}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        );

      case "imovie-projects":
        return (
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VIDEO_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="flex flex-col p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 hover:shadow-lg transition-all"
              >
                <MacVideoThumbnail className="w-full h-32 mb-3 rounded-lg overflow-hidden" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {proj.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Role: {proj.role}
                </p>
                <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[11px] text-slate-400">
                  <span>{proj.software}</span>
                  <span>{proj.year}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case "downloads":
      case "archive-2018":
        return (
          <div className="p-4 space-y-3">
            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-lg text-xs text-amber-900 dark:text-amber-200">
              <span className="font-semibold">Producer Stem Vault:</span> Downloadable sample loops and analog synthesizer stems crafted by Vahrun.
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex flex-col items-center p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                <MacAudioIcon className="w-12 h-14 mb-2" />
                <span className="text-xs font-medium text-center">Lucknow_Bass_140BPM.wav</span>
                <span className="text-[10px] text-slate-400">14.2 MB</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                <MacAudioIcon className="w-12 h-14 mb-2" />
                <span className="text-xs font-medium text-center">Analog_Drone_Cmin.wav</span>
                <span className="text-[10px] text-slate-400">22.8 MB</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                <MacDocIcon type="docx" className="w-12 h-14 mb-2" />
                <span className="text-xs font-medium text-center">Stem_Licensing_Info.docx</span>
                <span className="text-[10px] text-slate-400">18 KB</span>
              </div>
            </div>
          </div>
        );

      case "final-documents":
      case "documents":
      default:
        return (
          <div className="p-5 space-y-4">
            {/* Bio Card */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-white shadow-md">
              <h2 className="text-lg font-bold lowercase">{VAHRUN_BIO.name}</h2>
              <p className="text-xs text-blue-100 font-medium mt-0.5">
                {VAHRUN_BIO.title} • {VAHRUN_BIO.location}
              </p>
              <p className="text-xs text-blue-50 mt-2 leading-relaxed">
                {VAHRUN_BIO.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {VAHRUN_BIO.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded text-[10px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Document Files */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div
                onClick={() => onOpenAboutMeNote?.()}
                className="flex flex-col items-center p-3 rounded-lg border border-amber-200/80 dark:border-slate-800 hover:border-amber-500 hover:shadow-md cursor-pointer transition-all bg-amber-50/50 dark:bg-slate-900"
              >
                <MacDocIcon type="txt" className="w-12 h-14 mb-2" />
                <span className="text-xs font-medium text-center">aboutme.txt</span>
                <span className="text-[10px] text-amber-600 dark:text-amber-400">Notes • Vahrun Bio</span>
              </div>
              <div
                onClick={() => setActiveTab("music")}
                className="flex flex-col items-center p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all bg-white dark:bg-slate-900"
              >
                <MacDocIcon type="docx" className="w-12 h-14 mb-2" />
                <span className="text-xs font-medium text-center">Vahrun_Discography.docx</span>
                <span className="text-[10px] text-slate-400">Spotify / Apple Music</span>
              </div>
              <div
                onClick={() => setActiveTab("imovie-projects")}
                className="flex flex-col items-center p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all bg-white dark:bg-slate-900"
              >
                <MacDocIcon type="pptx" className="w-12 h-14 mb-2" />
                <span className="text-xs font-medium text-center">Video_Editing_Showcase.pptx</span>
                <span className="text-[10px] text-slate-400">After Effects & Premiere</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      onMouseDown={() => onFocus(id)}
      drag
      dragMomentum={false}
      dragElastic={0.05}
      initial={{ scale: 0.88, opacity: 0, y: 15 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: 0,
        width: isMaximized ? "94vw" : "min(94vw, 680px)",
        height: isMaximized ? "85vh" : "min(80vh, 460px)",
      }}
      exit={{ scale: 0.85, opacity: 0, y: 10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ zIndex }}
      className={`absolute top-[6%] sm:top-[12%] left-[3%] sm:left-[22%] max-w-[94vw] flex flex-col rounded-xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-white/40 dark:border-slate-700/60 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl text-slate-900 dark:text-slate-100 select-none ${
        isMaximized ? "fixed top-6 left-3 sm:top-10 sm:left-6" : ""
      }`}
    >
      {/* Title Bar & Window Header */}
      <div className="h-10 bg-gradient-to-b from-slate-200/90 to-slate-300/80 dark:from-slate-800/90 dark:to-slate-900/90 border-b border-slate-300/60 dark:border-slate-800/60 px-3 flex items-center justify-between cursor-grab active:cursor-grabbing">
        {/* Traffic Light Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onClose(id)}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 border border-red-600/60 flex items-center justify-center group cursor-pointer"
            title="Close"
          >
            <span className="text-[8px] font-bold text-red-950 opacity-0 group-hover:opacity-100">✕</span>
          </button>
          <button
            onClick={() => onClose(id)}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 border border-yellow-600/60 flex items-center justify-center group cursor-pointer"
            title="Minimize"
          >
            <span className="text-[8px] font-bold text-yellow-950 opacity-0 group-hover:opacity-100">−</span>
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 border border-emerald-600/60 flex items-center justify-center group cursor-pointer"
            title="Zoom"
          >
            <span className="text-[8px] font-bold text-emerald-950 opacity-0 group-hover:opacity-100">⤢</span>
          </button>
        </div>

        {/* Folder Title */}
        <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
          <Folder className="w-4 h-4 text-blue-500 fill-blue-500" />
          <span className="capitalize">{title || activeTab}</span>
        </div>

        {/* View mode toggles */}
        <div className="flex items-center space-x-1 bg-slate-300/60 dark:bg-slate-800/60 p-0.5 rounded-md text-slate-600 dark:text-slate-300 text-xs">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-1 rounded ${viewMode === "grid" ? "bg-white dark:bg-slate-700 shadow-xs text-blue-600" : ""}`}
          >
            <Grid className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-1 rounded ${viewMode === "list" ? "bg-white dark:bg-slate-700 shadow-xs text-blue-600" : ""}`}
          >
            <ListIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Toolbar Sub-bar */}
      <div className="h-9 bg-slate-100/60 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60 px-3 flex items-center justify-between text-xs">
        {/* Navigation arrows */}
        <div className="flex items-center space-x-1">
          <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-slate-400">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-slate-400">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-44">
          <Search className="w-3.5 h-3.5 absolute left-2 top-2 text-slate-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-7 pr-2 py-1 bg-slate-200/70 dark:bg-slate-800/70 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Window Body (Sidebar + Main Content) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-44 bg-slate-100/50 dark:bg-slate-900/50 border-r border-slate-200/60 dark:border-slate-800/60 p-2 space-y-1 overflow-y-auto">
          <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Favorites
          </div>
          {sidebarFavorites.map((fav) => {
            const Icon = fav.icon;
            const isActive = activeTab === fav.id;
            return (
              <button
                key={fav.id}
                onClick={() => setActiveTab(fav.id)}
                className={`w-full flex items-center space-x-2 px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-500"}`} />
                <span>{fav.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white/40 dark:bg-slate-950/40 overflow-y-auto">
          {renderFolderContent()}
        </div>
      </div>
    </motion.div>
  );
}
