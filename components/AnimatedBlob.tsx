"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedBlob({ className }: { className?: string }) {
  return (
    <motion.div
      className={`animated-blob ${className || ""}`}
      aria-hidden
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: [0.98, 1, 0.995] }}
      transition={{ duration: 9, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#2dd4bf" stopOpacity="0.28" />
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="260" fill="url(#g1)" />
      </svg>
    </motion.div>
  );
}
