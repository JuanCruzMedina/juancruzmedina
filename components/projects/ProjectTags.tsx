"use client";

import { Chip } from "@heroui/chip";
import { useHeroUISize } from "@/hooks/useHeroUISize";
import { useBreakpoint } from "@/hooks/useBreakpoint";

interface ProjectTagsProps {
  tags?: string[];
}

const ProjectTags = ({ tags = [] }: ProjectTagsProps) => {
  const breakpoint = useBreakpoint();

  const getChipSize = () => {
    switch (breakpoint) {
      case 'xs':
        return 'sm';
      case 'sm':
        return 'sm';
      default:
        return 'md';
    }
  };

  return tags.map((tag: string) => (
    <Chip 
      key={tag} 
      color="secondary" 
      radius="sm" 
      variant="flat"
      size={getChipSize()}
    >
      {tag}
    </Chip>
  ));
};

export default ProjectTags;
