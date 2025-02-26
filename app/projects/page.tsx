import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import { subtitle, textLink, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function ProjectsPage() {
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
    <>
      <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-start justify-center">
          <span className={title({ size: "lg" })}>
            {siteConfig.projects.title}
          </span>
          <br />
          <span className={title({ color: "violet", size: "xxl" })}>
            {siteConfig.projects.titleMark}&nbsp;
          </span>
        </div>
        <div className={subtitle({ class: "mt-4" })}>
          {siteConfig.projects.subtitle}
        </div>
        <div className="py-10 px-5">
          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
            {siteConfig.projects.items.map((project, index) => {
              return (
                <Card
                  key={index}
                  className="shadow-lg hover:scale-105 transition-transform"
                >
                  <CardHeader className="p-0">
                    <img
                      alt={project.title}
                      className="w-full max-h-72 object-cover rounded-t-xl"
                      src={project.image}
                    />
                    {/*todo: use Image component*/}
                  </CardHeader>
                  <CardBody className="p-4 bg-background-100">
                    <div>
                      <b className={title({ size: "xxs" })}>{project.title}</b>
                      {project.privacy !== "open" && (
                        <p className="inline font-semibold text-default-400 text-small">
                          &nbsp; ({privacyLabel(project.privacy)})
                        </p>
                      )}
                      <div
                        className="flex flex-wrap gap-1.5 mt-1 py-2"
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
                    <p className=" text-default-600 dark:text-gray-300 text-sm mt-4">
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
            })}
          </div>
        </div>
      </section>
    </>
  );
}
