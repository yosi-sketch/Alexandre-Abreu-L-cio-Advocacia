"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "gold"
    | "navy"
    | "dark"
    | "white"
    | "emerald"
    | "outline"
    | "outline-dark";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-8 py-4 text-xs tracking-[0.15em]",
  }[size];

  // High-contrast prestige styling (Imperial Warm Gold, Obsidian Charcoal & Silk Ivory)
  const variantClasses = {
    // Primary Signature: Imperial Brushed Gold & Champagne (Dra. Katia Silaine Santos)
    gold:
      "relative border border-[#fdf6e9]/90 bg-gradient-to-r from-[#8e6027] via-[#ca9759] to-[#754b18] text-white font-black tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(202,151,89,0.48),inset_0_1px_1px_rgba(255,255,255,0.45)] " +
      "hover:-translate-y-0.5 hover:from-[#b88540] hover:via-[#dfae67] hover:to-[#8e6027] " +
      "hover:shadow-[0_10px_30px_rgba(223,174,103,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(202,151,89,0.4)]",

    // Secondary Accent: Deep Obsidian Navy
    navy:
      "relative border border-[#5d7ca2]/40 bg-gradient-to-r from-[#080c12] via-[#101e30] to-[#0a131e] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(16,30,48,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] " +
      "hover:-translate-y-0.5 hover:from-[#0d1826] hover:via-[#162d47] hover:to-[#09121d] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(59,95,136,0.5)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(16,30,48,0.4)]",

    // High-Contrast Solid Midnight (ideal on White folds)
    dark:
      "relative border border-slate-800 bg-[#080c12] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#131b26] hover:border-[#ca9759] " +
      "hover:shadow-[0_10px_24px_rgba(0,0,0,0.4)]",

    // High-Contrast Pure White (ideal on Dark folds)
    white:
      "relative border border-white bg-white text-[#080c12] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#faf8f5] hover:border-slate-200 " +
      "hover:shadow-[0_10px_26px_rgba(255,255,255,0.2)]",

    // Outline on Dark Folds
    outline:
      "relative border border-white/20 bg-white/5 text-white font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-[#dfae67] hover:bg-white/10 hover:text-[#fcf8f0]",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-slate-300 bg-white/90 text-[#0e141c] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#ca9759] hover:text-[#8e6027] hover:bg-slate-50",

    // WhatsApp Conversion Green CTA
    emerald:
      "relative border border-[#25D366]/70 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 hover:brightness-110 " +
      "hover:shadow-[0_10px_26px_rgba(37,211,102,0.55)]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2.5 rounded-lg font-bold uppercase transition-all duration-200 select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
