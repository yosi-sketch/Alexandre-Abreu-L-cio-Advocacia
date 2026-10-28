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

  // High-contrast prestige styling (Antique Caramel Gold, Midnight Ink Navy & Silk Ivory)
  const variantClasses = {
    // Primary Signature: Antique Bronze Gold & Champagne
    gold:
      "relative border border-[#fef7ea]/90 bg-gradient-to-r from-[#8f6229] via-[#c59b5f] to-[#7a501a] text-white font-black tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(197,155,95,0.48),inset_0_1px_1px_rgba(255,255,255,0.45)] " +
      "hover:-translate-y-0.5 hover:from-[#b38245] hover:via-[#dfae67] hover:to-[#8f6229] " +
      "hover:shadow-[0_10px_30px_rgba(223,174,103,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(197,155,95,0.4)]",

    // Secondary Accent: Deep Midnight Navy
    navy:
      "relative border border-[#5d90cc]/40 bg-gradient-to-r from-[#060d16] via-[#0f2544] to-[#091728] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(15,37,68,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] " +
      "hover:-translate-y-0.5 hover:from-[#0d1e35] hover:via-[#16355e] hover:to-[#0a182a] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(59,113,184,0.5)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(15,37,68,0.4)]",

    // High-Contrast Solid Midnight (ideal on White folds)
    dark:
      "relative border border-slate-800 bg-[#060d16] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#0f2035] hover:border-[#c59b5f] " +
      "hover:shadow-[0_10px_24px_rgba(0,0,0,0.4)]",

    // High-Contrast Pure White (ideal on Dark folds)
    white:
      "relative border border-white bg-white text-[#060d16] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#fbf9f5] hover:border-slate-200 " +
      "hover:shadow-[0_10px_26px_rgba(255,255,255,0.2)]",

    // Outline on Dark Folds
    outline:
      "relative border border-white/20 bg-white/5 text-white font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-[#dfae67] hover:bg-white/10 hover:text-[#fcf6ea]",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-slate-300 bg-white/90 text-[#091728] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#c59b5f] hover:text-[#c59b5f] hover:bg-slate-50",

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
