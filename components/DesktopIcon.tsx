"use client";

import React from "react";
import { motion } from "framer-motion";
import { DesktopIconItem } from "@/data/desktopIcons";
import {
  MacFolderIcon,
  MacDocIcon,
  MacAudioIcon,
  MacZipIcon,
  MacShortcutsIcon,
  MacAfterEffectsIcon,
  MacIronPalaceIcon,
  MacImageThumbnail,
  MacVideoThumbnail,
} from "./MacIcons";

interface DesktopIconProps {
  icon: DesktopIconItem;
  isSelected: boolean;
  onSelect: (id: string, e: React.MouseEvent) => void;
  onDoubleClick: (icon: DesktopIconItem) => void;
}

export function DesktopIcon({
  icon,
  isSelected,
  onSelect,
  onDoubleClick,
}: DesktopIconProps) {
  const renderIconGraphic = () => {
    switch (icon.type) {
      case "folder":
        return (
          <MacFolderIcon
            badge={icon.badge as "icloud" | "download" | "star"}
            className="w-[60px] h-[52px]"
          />
        );
      case "document":
        if (icon.label.endsWith(".txt") || icon.id.includes("txt")) {
          return <MacDocIcon type="txt" className="w-[50px] h-[58px]" />;
        }
        return <MacDocIcon type="docx" className="w-[50px] h-[58px]" />;
      case "pptx":
        return <MacDocIcon type="pptx" className="w-[50px] h-[58px]" />;
      case "audio":
        return <MacAudioIcon className="w-[50px] h-[58px]" />;
      case "zip":
        return <MacZipIcon className="w-[50px] h-[58px]" />;
      case "shortcut":
        return <MacShortcutsIcon className="w-[54px] h-[54px]" />;
      case "app":
        if (icon.id === "ae-app") {
          return <MacAfterEffectsIcon className="w-[54px] h-[54px]" />;
        }
        if (icon.id === "iron-palace-icon") {
          return <MacIronPalaceIcon className="w-[54px] h-[54px]" />;
        }
        return <MacFolderIcon badge="star" className="w-[60px] h-[52px]" />;
      case "image":
        return (
          <MacImageThumbnail
            gradient={icon.previewGradient}
            className="w-[58px] h-[52px]"
          />
        );
      case "video":
        return <MacVideoThumbnail className="w-[58px] h-[52px]" />;
      default:
        return <MacFolderIcon className="w-[60px] h-[52px]" />;
    }
  };

  const stylePosition: React.CSSProperties = {
    top: icon.defaultPosition.top,
    ...(icon.defaultPosition.left && { left: icon.defaultPosition.left }),
    ...(icon.defaultPosition.right && { right: icon.defaultPosition.right }),
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.05}
      style={stylePosition}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(icon.id, e);
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onDoubleClick(icon);
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`absolute z-10 flex flex-col items-center justify-center w-[90px] p-1.5 rounded-lg cursor-pointer transition-colors duration-150 select-none group ${
        isSelected
          ? "bg-blue-600/50 border border-blue-400/80 backdrop-blur-xs ring-1 ring-blue-300/40"
          : "hover:bg-white/10 hover:backdrop-blur-xs"
      }`}
    >
      {/* Icon Visual */}
      <div className="relative mb-1 flex items-center justify-center filter group-hover:brightness-110">
        {renderIconGraphic()}
      </div>

      {/* Label Text */}
      {icon.label && (
        <div className="flex flex-col items-center max-w-full">
          <span
            className={`text-[12px] sm:text-[13px] font-medium leading-tight text-center break-words max-w-[95px] line-clamp-2 px-1 rounded ${
              isSelected
                ? "bg-blue-600 text-white font-semibold shadow-sm"
                : "text-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.9)] group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
            }`}
          >
            {icon.label}
          </span>
          {icon.sublabel && (
            <span className="text-[10px] text-blue-100/90 font-medium drop-shadow-[0_1px_1.5px_rgba(0,0,0,0.9)] text-center line-clamp-1">
              {icon.sublabel}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}
