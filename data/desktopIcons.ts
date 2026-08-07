export type IconType =
  | "folder"
  | "image"
  | "audio"
  | "video"
  | "app"
  | "document"
  | "pptx"
  | "zip"
  | "shortcut";

export interface DesktopIconItem {
  id: string;
  label: string;
  type: IconType;
  // Position as percentage of viewport for responsiveness (top: %, left: % or right: %)
  defaultPosition: {
    top: string; // e.g. "8%"
    left?: string;
    right?: string;
  };
  sublabel?: string; // e.g. "(1 item)"
  badge?: string;
  previewGradient?: string;
  previewUrl?: string;
  targetFolder?: string; // ID of folder to open
  fileSize?: string;
  caption?: string;
}

export const DESKTOP_ICONS: DesktopIconItem[] = [];
