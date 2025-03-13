"use client";

import { useHeroUISize } from "./useHeroUISize";

type ButtonSize = "sm" | "md" | "lg";

/**
 * Hook that returns the appropriate button size based on the current viewport
 * @returns The appropriate button size for the current viewport
 */
export function useButtonSize(): ButtonSize {
  const size = useHeroUISize();
  
  if (size === "sm") {
    return "sm";
  }
  if (size === "md") {
    return "md";
  }
  if (size === "lg" || size === "xl") {
    return "lg";
  }
  
  // Default fallback
  return "md";
}