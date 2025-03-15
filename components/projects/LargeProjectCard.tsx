import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";

import { ProjectCardTitle } from "@/components/primitives";
import { Project } from "@/types";
import ProjectTags from "@/components/projects/ProjectTags";
import ProjectLinks from "@/components/projects/ProjectLinks";

const LargeProjectCard = ({ project }: { project: Project }) => {
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
        <div className="flex justify-between">
          <h3 className={ProjectCardTitle()}>{project.title}</h3>
          <ProjectLinks
            link={project.link}
            privacy={project.privacy}
            sourceLink={project.sourceLink}
          />
        </div>
        <div
          className="flex flex-wrap gap-1.5 mt-1 py-2"
          hidden={!!project.tags}
        >
          {project.tags && <ProjectTags tags={project.tags} />}
        </div>

        <Divider className="mt-1" />
        <p className="text-default-600 dark:text-gray-300 text-sm mt-4">
          {project.fullDescription}
        </p>
      </CardBody>
    </Card>
  );
};

export default LargeProjectCard;
