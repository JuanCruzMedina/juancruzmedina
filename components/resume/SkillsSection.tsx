"use client";
import React, { useRef, useEffect, useState } from "react";
import { Chip } from "@heroui/chip";

import { sectionTitle } from "@/components/primitives";
import { useHeroUISize } from "@/hooks/useHeroUISize";

const SkillsSection = ({ skills }: { skills: string[] }) => {
  const size = useHeroUISize();

  const containerRef = useRef<HTMLDivElement>(null);
  const [chipRefs, setChipRefs] = useState<React.RefObject<HTMLDivElement>[]>(
    [],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setChipRefs(skills.map(() => React.createRef<HTMLDivElement>()));
  }, [skills]);

  const handleMouseEnter = (index: number): void => {
    setActiveIndex(index);
  };

  const handleMouseLeave = (): void => {
    setActiveIndex(null);
  };

  const isActiveOrAdjacent = (index: number): boolean => {
    if (activeIndex === null) return false;
    if (index === activeIndex) return true;

    const activeChip = chipRefs[activeIndex]?.current;
    const currentChip = chipRefs[index]?.current;

    if (!activeChip || !currentChip) return false;

    const activeRect = activeChip.getBoundingClientRect();
    const currentRect = currentChip.getBoundingClientRect();

    const distance = Math.hypot(
      activeRect.left - currentRect.left,
      activeRect.top - currentRect.top,
    );

    const threshold = (activeRect.width + currentRect.width) / 2 + 25;

    return distance < threshold;
  };

  return (
    <section className="w-full">
      <span className={sectionTitle({ size: "sm", class: "mt-4" })}>
        Skills
      </span>
      <div
        ref={containerRef}
        className="flex flex-wrap gap-3 py-8 justify-center relative max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={chipRefs[index]}
            className={`
              transition-all duration-300 scale-100
              ${isActiveOrAdjacent(index) ? "scale-110 z-10" : "z-0"}
            `}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Chip
              className={`transition-all duration-300 px-3 py-2 text-sm sm:text-base`}
              color="secondary"
              size={size}
              variant="flat"
            >
              {skill}
            </Chip>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
