import { Accordion, AccordionItem } from "@heroui/accordion";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { Chip } from "@heroui/chip";

import { sectionTitle, workExperienceCard } from "@/components/primitives";

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
    <section className="w-full mt-2 md:mt-6">
      <span
        className={sectionTitle({
          size: "sm",
        })}
      >
        Work Experience
      </span>
      <Accordion
        className="w-full mt-4 mb-5"
        selectionMode="multiple"
        variant="light"
      >
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
                  className={workExperienceCard({
                    class: "dark:text-white shrink-0",
                  })}
                  color="secondary"
                  size="sm"
                  variant="bordered"
                >
                  {experience.type}
                </Chip>
                <span
                  className={workExperienceCard({
                    type: "charge",
                  })}
                >
                  {experience.charge}
                </span>
              </div>
            }
            title={
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                <div className="min-w-0">
                  <span className={workExperienceCard({ type: "company" })}>
                    {experience.company}
                  </span>
                  <span className={workExperienceCard({ type: "location" })}>
                    , {experience.location}
                  </span>
                </div>

                <span
                  className={workExperienceCard({
                    type: "date",
                    class: "mb-1 sm:mb-0",
                  })}
                >
                  {experience.date}
                </span>
              </div>
            }
          >
            <div className="mb-2">
              {experience.descriptionItems.map((description, index) => (
                <div
                  key={index}
                  className={workExperienceCard({
                    type: "description",
                    class: "py-1",
                  })}
                >
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
