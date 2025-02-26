import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";

import { GithubOutline } from "@/components/icons";

interface Project {
  privacy: string;
  sourceLink: string | null;
}

export const ProjectPrivacy = (project: Project) => {
  if (project.privacy === "open" && project.sourceLink !== null) {
    return (
      <div className="flex justify-between mr-3.5">
        <Button
          isExternal
          isIconOnly
          as={Link}
          className="bg-transparent"
          href={project.sourceLink}
          startContent={<GithubOutline strokeHoverColor="#FF1CF7" />}
        />
      </div>
    );
  }

  if (project.privacy === "internal") {
    return (
      <Chip color={"secondary"} variant="light">
        Internal
      </Chip>
    );
  }

  return (
    <Chip color={"secondary"} variant="light">
      Closed source
    </Chip>
  );
};
