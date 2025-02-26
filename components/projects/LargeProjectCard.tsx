import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import { textLink, title } from "@/components/primitives";
import { Project } from "@/types";
import ProjectTags from "@/components/projects/ProjectTags";

const LargeProjectCard = ({ project }: { project: Project }) => {
  const privacyLabel = (privacy: string) => {
    if (privacy === "closed") {
      return "Closed Source";
    }
    if (privacy === "open") {
      return "Open Source";
    }
    if (privacy === "internal") {
      return "Internal Project";
    }
  };

  return (
    <Card className="shadow-lg hover:scale-105 transition-transform">
      <CardHeader className="p-0 w-full h-auto overflow-hidden rounded-t-xl">
        <Image
          alt={project.title}
          className="w-full h-full object-cover aspect-[16/9]"
          src={project.image}
        />
      </CardHeader>
      <CardBody className="p-4 bg-background-100">
        <div>
          <b className={title({ size: "xxs" })}>{project.title}</b>
          {project.privacy !== "open" && (
            <p className="inline font-semibold text-default-400 text-small">
              &nbsp; ({privacyLabel(project.privacy)})
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-1 py-2">
            {project.tags && <ProjectTags tags={project.tags} />}
          </div>
        </div>
        <p className="text-default-600 dark:text-gray-300 text-sm mt-4">
          {project.description}
        </p>
        {project.sourceLink && (
          <>
            <Divider className="mt-2 mb-2" />
            <Link
              isExternal
              showAnchorIcon
              className={textLink()}
              href={project.sourceLink}
            >
              Check source code.
            </Link>
            {project.link && (
              <Link
                isExternal
                showAnchorIcon
                className={textLink()}
                href={project.link}
              >
                Website.
              </Link>
            )}
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default LargeProjectCard;
