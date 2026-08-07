"use client";

import React, { useState, useEffect } from "react";
import {
  Wifi,
  Airplay,
  Battery,
  Search,
  Sliders,
  Check,
  Volume2,
  Moon,
  Info,
  Sparkles,
} from "lucide-react";
import { VAHRUN_BIO } from "@/data/portfolioData";

interface MenuBarProps {
  onOpenSpotlight: () => void;
  onOpenControlCenter: () => void;
  onOpenAbout: () => void;
  onOpenFolder?: (folderId: string) => void;
}

export function MenuBar({
  onOpenSpotlight,
  onOpenControlCenter,
  onOpenAbout,
  onOpenFolder,
}: MenuBarProps) {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleDateString("en-US", options).replace(",", ""));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = ["File", "Edit", "View", "Go", "Window", "Help"];

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header className="relative z-50 w-full h-7 bg-white/30 dark:bg-slate-900/40 backdrop-blur-md border-b border-white/20 dark:border-slate-800/40 px-3 flex items-center justify-between text-slate-900 dark:text-slate-100 text-[13px] font-medium select-none shadow-sm">
      {/* Left Menu Items */}
      <div className="flex items-center space-x-1 sm:space-x-3">
        {/* Apple Icon */}
        <div className="relative">
          <button
            onClick={() => handleMenuClick("apple")}
            className="p-1 hover:bg-white/20 dark:hover:bg-slate-700/40 rounded transition-colors flex items-center justify-center cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.16-1.9-14.49-6.1-3.3-2.67-7.23-7.44-11.79-14.32-6.53-9.79-11.75-20.73-15.67-32.82-3.92-12.09-5.88-23.78-5.88-35.08 0-14.68 3.53-27.12 10.59-37.33 7.06-10.21 16.27-15.42 27.63-15.64 4.57 0 9.87 1.25 15.89 3.75 6.02 2.5 10.27 3.75 12.74 3.75 2.17 0 6.47-1.25 12.89-3.75 6.42-2.5 11.49-3.64 15.22-3.42 12.72.65 22.84 5.54 30.36 14.67-11.3 6.85-16.85 16.41-16.63 28.69.22 9.68 3.86 17.77 10.92 24.28 7.06 6.51 15.38 10.15 24.96 10.92-2.5 7.61-5.76 15.33-9.78 23.16zM119.22 31.95c0-7.39 2.66-14.35 7.98-20.87C132.52 4.56 139.75 1 148.88 0c.22 1.3.33 2.39.33 3.26 0 7.28-2.77 14.38-8.31 21.3-5.54 6.92-12.77 10.65-21.68 11.19-.22-1.3-.33-2.39-.33-3.8z" />
            </svg>
          </button>
          {activeMenu === "apple" && (
            <div className="absolute left-0 top-7 w-52 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/60 rounded-lg shadow-2xl py-1 text-[13px] z-50 animate-in fade-in zoom-in-95 duration-100">
              <button
                onClick={() => {
                  setActiveMenu(null);
                  onOpenAbout();
                }}
                className="w-full px-3 py-1 text-left hover:bg-blue-600 hover:text-white flex items-center justify-between"
              >
                <span>About Vahrun</span>
                <Info className="w-3.5 h-3.5 opacity-70" />
              </button>
              <div className="my-1 border-t border-slate-200 dark:border-slate-700/60" />
              <button
                onClick={() => {
                  setActiveMenu(null);
                  if (onOpenFolder) onOpenFolder("final-documents");
                }}
                className="w-full px-3 py-1 text-left hover:bg-blue-600 hover:text-white"
              >
                System Preferences...
              </button>
              <button
                onClick={() => {
                  setActiveMenu(null);
                  if (onOpenFolder) onOpenFolder("photos");
                }}
                className="w-full px-3 py-1 text-left hover:bg-blue-600 hover:text-white"
              >
                App Store...
              </button>
              <div className="my-1 border-t border-slate-200 dark:border-slate-700/60" />
              <button
                onClick={() => setActiveMenu(null)}
                className="w-full px-3 py-1 text-left hover:bg-blue-600 hover:text-white"
              >
                Sleep
              </button>
              <button
                onClick={() => {
                  setActiveMenu(null);
                  window.location.reload();
                }}
                className="w-full px-3 py-1 text-left hover:bg-blue-600 hover:text-white"
              >
                Restart...
              </button>
            </div>
          )}
        </div>

        {/* App Title */}
        <span className="font-bold px-1.5 py-0.5 hover:bg-white/20 dark:hover:bg-slate-700/40 rounded cursor-pointer">
          Finder
        </span>

        {/* Menus */}
        {menuItems.map((item) => (
          <div key={item} className="relative hidden sm:block">
            <button
              onClick={() => handleMenuClick(item)}
              className="px-2 py-0.5 hover:bg-white/20 dark:hover:bg-slate-700/40 rounded cursor-pointer transition-colors"
            >
              {item}
            </button>

            {activeMenu === item && (
              <div className="absolute left-0 top-7 w-48 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/60 rounded-lg shadow-2xl py-1 text-[13px] z-50 animate-in fade-in zoom-in-95 duration-100">
                <button
                  onClick={() => {
                    setActiveMenu(null);
                    if (onOpenFolder) onOpenFolder("documents");
                  }}
                  className="w-full px-3 py-1 text-left hover:bg-blue-600 hover:text-white"
                >
                  New Finder Window
                </button>
                <button
                  onClick={() => {
                    setActiveMenu(null);
                    onOpenSpotlight();
                  }}
                  className="w-full px-3 py-1 text-left hover:bg-blue-600 hover:text-white"
                >
                  Spotlight Search
                </button>
                <div className="my-1 border-t border-slate-200 dark:border-slate-700/60" />
                <button
                  onClick={() => setActiveMenu(null)}
                  className="w-full px-3 py-1 text-left hover:bg-blue-600 hover:text-white"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Menu Icons */}
      <div className="flex items-center space-x-1.5 sm:space-x-3 text-slate-900 dark:text-slate-100">
        {/* Wifi */}
        <button
          onClick={() => handleMenuClick("wifi")}
          className="p-1 hover:bg-white/20 dark:hover:bg-slate-700/40 rounded transition-colors relative cursor-pointer"
          title="Wi-Fi: Connected to Vahrun Studio 5G"
        >
          <Wifi className="w-3.5 h-3.5" />
          {activeMenu === "wifi" && (
            <div className="absolute right-0 top-7 w-56 bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl border border-white/40 dark:border-slate-700/60 rounded-lg shadow-2xl p-2 z-50">
              <div className="flex items-center justify-between text-xs font-semibold px-2 py-1 border-b border-slate-200 dark:border-slate-800">
                <span>Wi-Fi</span>
                <span className="text-emerald-500 font-normal">On</span>
              </div>
              <div className="mt-1 space-y-1 text-xs">
                <div className="flex items-center justify-between px-2 py-1 bg-blue-600 text-white rounded">
                  <span className="font-medium">Vahrun Studio 5G</span>
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
                  Lucknow Sound Mesh
                </div>
              </div>
            </div>
          )}
        </button>

        {/* AirPlay */}
        <button
          className="p-1 hover:bg-white/20 dark:hover:bg-slate-700/40 rounded transition-colors cursor-pointer hidden sm:block"
          title="AirPlay Display"
        >
          <Airplay className="w-3.5 h-3.5" />
        </button>

        {/* Battery */}
        <div className="flex items-center space-x-1 px-1 py-0.5 hover:bg-white/20 dark:hover:bg-slate-700/40 rounded cursor-pointer">
          <span className="text-[12px] font-medium">88%</span>
          <div className="relative flex items-center">
            <Battery className="w-4 h-4 fill-emerald-500 stroke-emerald-600" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-1 bg-white rounded-xs" />
            </div>
          </div>
        </div>

        {/* US Flag */}
        <div className="flex items-center px-1 py-0.5 hover:bg-white/20 dark:hover:bg-slate-700/40 rounded cursor-pointer">
          <span className="text-xs">🇺🇸</span>
        </div>

        {/* Live Clock */}
        <button className="px-1.5 py-0.5 hover:bg-white/20 dark:hover:bg-slate-700/40 rounded cursor-pointer font-medium tracking-tight">
          {currentTime || "Thu Aug 7  4:29 PM"}
        </button>

        {/* Spotlight Search Icon */}
        <button
          onClick={onOpenSpotlight}
          className="p-1 hover:bg-white/20 dark:hover:bg-slate-700/40 rounded transition-colors cursor-pointer"
          title="Spotlight Search (Cmd+Space)"
        >
          <Search className="w-3.5 h-3.5" />
        </button>

        {/* Control Center */}
        <button
          onClick={onOpenControlCenter}
          className="p-1 hover:bg-white/20 dark:hover:bg-slate-700/40 rounded transition-colors cursor-pointer"
          title="Control Center"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
}
