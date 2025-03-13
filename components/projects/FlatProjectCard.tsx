'use client'

import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

import {
  flatProjectCardText,
  flatProjectCardSpacing,
  textLink,
  ProjectCardTitle
} from "@/components/primitives";
import { Project } from "@/types";
import ProjectTags from "@/components/projects/ProjectTags";
import { useHeroUISize } from "@/hooks/useHeroUISize";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

const FlatProjectCard = ({ project }: { project: Project }) => {
  const size = useHeroUISize();
  const imageSize = () => {
    if (size === 'sm') {
      return 220;
    }
    if (size === 'md') {
      return 240;
    }
    if (size === 'lg') {
      return 300;
    }
    if (size === 'xl') {
      return 280;
    }
    return 220;
  }
  return (
    <Card
      isBlurred
      shadow="sm"
      className="bg-background/60 dark:bg-default-100/50 scale-95 hover:scale-100"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          alt={project.title}
          className="object-cover w-full h-[140px]"
          height={imageSize()}
          shadow="md"
          src={project.image}
          width="100%"
        />
      </CardBody>
      <CardFooter>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h3 className={ProjectCardTitle()}>{project.title}</h3>
            <div className="flex h-5 items-center space-x-0.1 md:space-x-2">
              <div hidden={!project.link}>
                <Link
                  href={project.link}
                  size="sm"
                  showAnchorIcon
                  className={textLink({ size: "onlyIcon" })}
                >
                  View
                </Link>
              </div>
              <Divider orientation="vertical" hidden={!!(!project.link || !project.sourceLink)}></Divider>
              <div hidden={!project.sourceLink}>
                <Link
                  href={project.sourceLink}
                  size="sm"
                  showAnchorIcon
                  className={textLink({ size: "onlyIcon" })}
                >
                  Source
                </Link>
              </div>
            </div>
          </div>
          <div
            className={flatProjectCardSpacing({ type: "tagsContainer" })}
            hidden={!!project.tags}
          >
            {project.tags && <ProjectTags tags={project.tags} />}
          </div>
          <Divider className="mt-1" />
          <p className={flatProjectCardText({ type: "description", class: "mt-2.5 md:mt-3" })}>{project.shortDescription}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FlatProjectCard;
