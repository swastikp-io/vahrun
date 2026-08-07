"use client";

import React, { useEffect } from "react";
import { FolderPlus, RefreshCw, Layers, Sliders, Info, Monitor } from "lucide-react";

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onNewFolder: () => void;
  onRefresh: () => void;
}

export function ContextMenu({
  x,
  y,
  onClose,
  onNewFolder,
  onRefresh,
}: ContextMenuProps) {
  useEffect(() => {
    const handleDown = () => onClose();
    window.addEventListener("mousedown", handleDown);
    return () => window.removeEventListener("mousedown", handleDown);
  }, [onClose]);

  return (
    <div
      style={{ top: y, left: x }}
      onClick={(e) => e.stopPropagation()}
      className="fixed z-50 w-52 bg-white/80 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/40 dark:border-slate-700/60 rounded-xl shadow-2xl py-1 text-slate-900 dark:text-slate-100 text-xs font-medium select-none animate-in fade-in zoom-in-95 duration-100"
    >
      <button
        onClick={() => {
          onNewFolder();
          onClose();
        }}
        className="w-full px-3 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center space-x-2"
      >
        <FolderPlus className="w-3.5 h-3.5" />
        <span>New Folder</span>
      </button>

      <div className="my-1 border-t border-slate-200 dark:border-slate-800" />

      <button
        onClick={() => {
          onRefresh();
          onClose();
        }}
        className="w-full px-3 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center space-x-2"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        <span>Clean Up Desktop</span>
      </button>
      <button
        onClick={onClose}
        className="w-full px-3 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center space-x-2"
      >
        <Layers className="w-3.5 h-3.5" />
        <span>Sort By &gt; Name</span>
      </button>

      <div className="my-1 border-t border-slate-200 dark:border-slate-800" />

      <button
        onClick={onClose}
        className="w-full px-3 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center space-x-2"
      >
        <Monitor className="w-3.5 h-3.5" />
        <span>Change Wallpaper...</span>
      </button>
      <button
        onClick={onClose}
        className="w-full px-3 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center space-x-2"
      >
        <Info className="w-3.5 h-3.5" />
        <span>Get Info</span>
      </button>
    </div>
  );
}
