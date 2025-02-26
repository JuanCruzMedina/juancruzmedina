"use client";
import React, { useRef, useEffect, useState } from "react";
import { Chip } from "@heroui/chip"; // Asegúrate de que esta importación sea correcta

import { subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chipRefs, setChipRefs] = useState<React.RefObject<HTMLDivElement>[]>(
    [],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const refs = siteConfig.resume.skills.map(() =>
      React.createRef<HTMLDivElement>(),
    );

    setChipRefs(refs);
  }, []);

  const handleMouseEnter = (index: number): void => {
    setActiveIndex(index);
  };

  const handleMouseLeave = (): void => {
    setActiveIndex(null);
  };

  const isActiveOrAdjacent = (index: number): boolean => {
    if (activeIndex === null) return false;
    if (index === activeIndex) return true;

    if (
      !chipRefs.length ||
      !chipRefs[index] ||
      !chipRefs[index].current ||
      !chipRefs[activeIndex] ||
      !chipRefs[activeIndex].current
    ) {
      return false;
    }

    const activeRect = chipRefs[activeIndex].current.getBoundingClientRect();
    const currentRect = chipRefs[index].current.getBoundingClientRect();

    const activeCenter = {
      x: activeRect.left + activeRect.width / 2,
      y: activeRect.top + activeRect.height / 2,
    };

    const currentCenter = {
      x: currentRect.left + currentRect.width / 2,
      y: currentRect.top + currentRect.height / 2,
    };

    const distance = Math.sqrt(
      Math.pow(activeCenter.x - currentCenter.x, 2) +
        Math.pow(activeCenter.y - currentCenter.y, 2),
    );

    const proximityThreshold = (activeRect.width + currentRect.width) / 2 + 30;

    return distance < proximityThreshold;
  };

  return (
    <section className="w-full">
      <span
        className={subtitle({
          size: "xxl",
          class: "mt-4 text-default-800 font-semibold",
        })}
      >
        Skills
        <div
          ref={containerRef}
          className="flex flex-wrap gap-3 py-8 justify-center relative"
        >
          {siteConfig.resume.skills.map((skill, index) => (
            <div
              key={index}
              ref={chipRefs[index]}
              className={`
                transition-all duration-300 
                ${isActiveOrAdjacent(index) ? "transform scale-110 z-10" : "z-0"}
              `}
              style={{ margin: "4px" }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Chip
                className={`transition-all duration-300 ${isActiveOrAdjacent(index) ? "p-2" : ""}`}
                color="secondary"
                size="lg"
                variant="flat"
              >
                {skill}
              </Chip>
            </div>
          ))}
        </div>
      </span>
    </section>
  );
}
