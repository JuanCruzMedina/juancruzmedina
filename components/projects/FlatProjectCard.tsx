import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { ProjectPrivacy } from "@/components/projects/ProjectPrivacy";
import { textLink } from "@/components/primitives";
import { Project } from "@/types";
import ProjectTags from "@/components/projects/ProjectTags";

const FlatProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 hover:scale-105 transition-transform"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-4 items-center justify-center bg-background-100 mr-3">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt={project.title}
              className="object-cover"
              height={220}
              shadow="md"
              src={project.image}
              width="100%"
            />
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8 ml-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h1 className="text-large font-semibold">{project.title}</h1>
                <div
                  className="flex flex-wrap gap-1.5 py-2"
                  hidden={!!project.tags}
                >
                  {project.tags && <ProjectTags tags={project.tags} />}
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <ProjectPrivacy
                  privacy={project.privacy}
                  sourceLink={project.link ?? null}
                />
              </div>
            </div>

            <div className="flex justify-between">
              <p className="text-medium text-default-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
            {project.link && (
              <Link
                isExternal
                showAnchorIcon
                className={textLink({ class: "mt-2" })}
                href={project.link}
              >
                Website.
              </Link>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FlatProjectCard;
