import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";

import { name, textLink, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { ProjectPrivacy } from "@/components/projectPrivacy";

interface LastProjectsProps {
  quantity?: number;
}

export const LastProjects = ({ quantity }: LastProjectsProps) => {
  const getLastProjects = () =>
    siteConfig.projects.items
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, quantity);

  return (
    <>
      <span className={title({ size: "md" })}>
        Latest {"  "}
        <Link
          className={name({ color: "violet", size: "md" })}
          href="/projects"
        >
          projects
        </Link>
      </span>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 py-8">
        {getLastProjects().map((project, index) => (
          <Card
            key={index}
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
                      <h1 className="text-large font-semibold">
                        {project.title}
                      </h1>
                      <div
                        className="flex flex-wrap gap-1.5 py-2"
                        hidden={!!project.tags}
                      >
                        {project.tags &&
                          project.tags.map((tag) => (
                            <Chip
                              key={tag}
                              color="secondary"
                              radius="lg"
                              variant="flat"
                            >
                              {tag}
                            </Chip>
                          ))}
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
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <Button
          as={Link}
          className="bg-gradient-to-tr from-[#FF1CF7] to-violet-600 text-white shadow-lg"
          href="/projects"
          radius="lg"
          size="lg"
        >
          See more projects
        </Button>
      </div>
    </>
  );
};
