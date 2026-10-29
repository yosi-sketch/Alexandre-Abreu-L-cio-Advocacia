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

  // High-contrast prestige styling (Champagne Platinum & Brushed Sand Gold, Obsidian Noir & Silk Pearl)
  const variantClasses = {
    // Primary Signature: Champagne Platinum & Brushed Sand Gold (Dr. Alexandre Abreu Lúcio)
    gold:
      "relative border border-[#fbf9f4]/90 bg-gradient-to-r from-[#8e7a5e] via-[#c5b293] to-[#7d6a50] text-[#090b0e] font-black tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(197,178,147,0.48),inset_0_1px_1px_rgba(255,255,255,0.6)] " +
      "hover:-translate-y-0.5 hover:from-[#a89576] hover:via-[#dfcfb2] hover:to-[#8e7a5e] hover:text-[#090b0e] " +
      "hover:shadow-[0_10px_30px_rgba(223,207,178,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(197,178,147,0.4)]",

    // Secondary Accent: Executive Charcoal Slate
    navy:
      "relative border border-[#64748b]/40 bg-gradient-to-r from-[#090b0e] via-[#1e293b] to-[#0f172a] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(15,23,42,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] " +
      "hover:-translate-y-0.5 hover:from-[#111827] hover:via-[#334155] hover:to-[#0f172a] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(71,85,105,0.5)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(15,23,42,0.4)]",

    // High-Contrast Solid Midnight (ideal on White folds)
    dark:
      "relative border border-slate-800 bg-[#090b0e] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#131820] hover:border-[#c5b293] " +
      "hover:shadow-[0_10px_24px_rgba(0,0,0,0.4)]",

    // High-Contrast Pure White (ideal on Dark folds)
    white:
      "relative border border-white bg-white text-[#090b0e] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#faf8f5] hover:border-slate-200 " +
      "hover:shadow-[0_10px_26px_rgba(255,255,255,0.2)]",

    // Outline on Dark Folds
    outline:
      "relative border border-white/20 bg-white/5 text-white font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-[#dfcfb2] hover:bg-white/10 hover:text-[#fbf9f4]",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-slate-300 bg-white/90 text-[#0e1217] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#c5b293] hover:text-[#8e7a5e] hover:bg-slate-50",

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
