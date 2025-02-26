import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

import { buttonGradient, name, title } from "@/components/primitives";
import FlatProjectCard from "@/components/projects/FlatProjectCard";
import { Project } from "@/types";

interface LastProjectsProps {
  quantity: number;
  projects: { items: Project[] };
}

export const LastProjects = ({ quantity, projects }: LastProjectsProps) => {
  const getLastProjects = () =>
    projects.items
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
          <FlatProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <Button
          as={Link}
          className={buttonGradient()}
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
