"use client";

import React from "react";
import { motion } from "framer-motion";

export function PlantDecoration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute bottom-0 right-0 z-20 pointer-events-none select-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] opacity-90 hover:opacity-100 transition-opacity"
    >
      {/* Photorealistic plant leaves overlapping from outside bottom right viewport */}
      <svg
        className="w-48 sm:w-64 md:w-80 h-auto"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e7d32" />
            <stop offset="60%" stopColor="#1b5e20" />
            <stop offset="100%" stopColor="#0d3b11" />
          </linearGradient>
          <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43a047" />
            <stop offset="70%" stopColor="#2e7d32" />
            <stop offset="100%" stopColor="#1b5e20" />
          </linearGradient>
          <linearGradient id="stemGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1b5e20" />
            <stop offset="100%" stopColor="#43a047" />
          </linearGradient>
        </defs>

        {/* Stems */}
        <path
          d="M 280 300 C 260 220 220 180 160 140"
          stroke="url(#stemGrad)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 300 280 C 270 200 240 140 180 90"
          stroke="url(#stemGrad)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Leaf 1 (Large Monstera Leaf) */}
        <path
          d="M 160 140 C 120 120 80 150 70 190 C 60 230 100 260 150 250 C 200 240 220 200 160 140 Z"
          fill="url(#leafGrad1)"
        />
        {/* Leaf 1 veins */}
        <path
          d="M 160 140 C 130 180 110 220 100 240"
          stroke="#4caf50"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Leaf 2 (Upper Leaf) */}
        <path
          d="M 180 90 C 140 60 90 80 80 120 C 70 160 110 180 160 170 C 210 160 220 120 180 90 Z"
          fill="url(#leafGrad2)"
        />
        {/* Leaf 2 veins */}
        <path
          d="M 180 90 C 150 120 130 150 120 165"
          stroke="#81c784"
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Leaf 3 (Small Foreground Leaf) */}
        <path
          d="M 220 210 C 190 190 160 210 150 240 C 140 270 170 285 210 275 C 240 265 245 230 220 210 Z"
          fill="url(#leafGrad1)"
        />
      </svg>
    </motion.div>
  );
}
