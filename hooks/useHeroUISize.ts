"use client";

import { useBreakpoint } from "./useBreakpoint";

type HeroUISize = "sm" | "md" | "lg";

/**
 * Hook that returns the appropriate HeroUI component size based on the current breakpoint
 * @param defaultSizeMap Optional custom mapping of breakpoints to HeroUI sizes
 * @returns The appropriate HeroUI size for the current viewport
 */
export function useHeroUISize(
  defaultSizeMap?: Partial<
    Record<ReturnType<typeof useBreakpoint>, HeroUISize>
  >,
): HeroUISize {
  const breakpoint = useBreakpoint();

  // Default mapping of breakpoints to HeroUI sizes
  const defaultMapping: Record<ReturnType<typeof useBreakpoint>, HeroUISize> = {
    xs: "sm",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "lg",
  };

  // Merge custom mapping with default mapping
  const sizeMap = { ...defaultMapping, ...defaultSizeMap };

  return sizeMap[breakpoint];
}
