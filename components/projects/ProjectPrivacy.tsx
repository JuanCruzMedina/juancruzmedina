"use client";

import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";

import { textLink, textWithColor } from "../primitives";

import { useHeroUISize } from "@/hooks/useHeroUISize";

interface Project {
  privacy: string;
  sourceLink: string | null;
}

export const ProjectPrivacy = (project: Project) => {
  const size = useHeroUISize();

  if (project.privacy === "open" && project.sourceLink !== null) {
    return (
      <div className="flex justify-between mr-3.5">
        <Link
          isExternal
          showAnchorIcon
          className={textLink({})}
          href={project.sourceLink}
          size={size}
        >
          Source
        </Link>
      </div>
    );
  }

  if (project.privacy === "internal") {
    return (
      <Chip className={textWithColor()} size={size} variant="light">
        Internal
      </Chip>
    );
  }

  return (
    <Chip className={textWithColor()} size={size} variant="light">
      Closed source
    </Chip>
  );
};
