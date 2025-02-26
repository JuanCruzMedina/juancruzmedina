import { Accordion, AccordionItem } from "@heroui/accordion";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { Chip } from "@heroui/chip";

import { subtitle, subtitleMarked } from "@/components/primitives";

interface WorkExperienceItem {
  company: string;
  companyLogo: string;
  type: string;
  charge: string;
  location: string;
  date: string;
  descriptionItems: string[];
}

const WorkExperience = ({
                          workExperience,
                        }: {
  workExperience: WorkExperienceItem[];
}) => {
  return (
    <section className="w-full">
      <span
        className={subtitle({
          size: "xxl",
          class: "py-8 text-default-800 font-semibold",
        })}
      >
        Work Experience
      </span>
      <Accordion className="w-full" selectionMode="multiple">
        {workExperience.map((experience, index) => (
          <AccordionItem
            key={index}
            aria-label={experience.company}
            className="w-full text-large"
            startContent={
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-md bg-white mr-2">
                <Image
                  alt={experience.company}
                  as={NextImage}
                  className="object-contain"
                  height={64}
                  priority={index < 2}
                  src={experience.companyLogo}
                  width={64}
                />
              </div>
            }
            subtitle={
              <div className="flex items-center gap-2 flex-nowrap min-w-0">
                <Chip
                  className="dark:text-white shrink-0"
                  color="secondary"
                  size="sm"
                  variant="bordered"
                >
                  {experience.type}
                </Chip>
                <span
                  className={subtitleMarked({
                    size: "lg",
                    class: "text-default-700 dark:text-violet-300 truncate",
                  })}
                >
                  {experience.charge}
                </span>
              </div>
            }
            title={
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                <div className="min-w-0">
                  <span
                    className={subtitle({
                      size: "lg",
                      class: "font-medium text-default-800 inline truncate",
                    })}
                  >
                    {experience.company}
                  </span>
                  <span className={subtitleMarked({ size: "sm" })}>
                    , {experience.location}
                  </span>
                </div>
                <Chip
                  className="mt-2 sm:mt-0 shrink-0"
                  color="default"
                  size="sm"
                  variant="light"
                >
                  {experience.date}
                </Chip>
              </div>
            }
          >
            <div className="mb-2">
              {experience.descriptionItems.map((description, index) => (
                <div key={index} className="py-1 text-medium">
                  {description}
                </div>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default WorkExperience;
