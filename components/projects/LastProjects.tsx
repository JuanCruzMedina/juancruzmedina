'use client';

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import NextLink from "next/link";

import { buttonGradient, sectionTitle, textLink, textParagraph } from "@/components/primitives";
import FlatProjectCard from "@/components/projects/FlatProjectCard";
import { Project } from "@/types";

import { useButtonSize } from "@/hooks/useButtonSize";

interface LastProjectsProps {
  quantity: number;
  projects: { items: Project[] };
}

export const LastProjects = ({ quantity, projects }: LastProjectsProps) => {
  const getLastProjects = () =>
    projects.items
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, quantity);

  const buttonSize = useButtonSize();

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-4 gap-2">
        <div className="md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-1">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row flex-wrap">
              <h2 className={sectionTitle({ class: "flex-grow" })}>
                Latests <p className={sectionTitle({color:"violet",class: "inline"})}>projects</p>
              </h2>
              <Link
                href="/projects"
                className={textLink({ class: "flex items-center grow-3" })}
                showAnchorIcon
                size="sm"
              >
                Explore more
              </Link>
            </div>
            <p className={textParagraph()}>
              Here's a selection of my latest projects.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 md:row-span-2 md:col-end-5 md:row-start-1">
          <FlatProjectCard project={getLastProjects()[0]} />
        </div>
        <div className="md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-2">
          <FlatProjectCard project={getLastProjects()[1]} />
        </div>
        <div className="md:col-span-2 md:row-span-2 md:col-end-5 md:row-start-3">
          <FlatProjectCard project={getLastProjects()[2]} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <Button
          as={NextLink}
          className={buttonGradient()}
          href="/projects"
          radius="sm"
          size={buttonSize}
        >
          See more projects
        </Button>
      </div>
    </>
  );
};
