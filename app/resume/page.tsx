"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { Chip } from "@heroui/chip";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

import {
  subtitle,
  subtitleMarked,
  textLink,
  title,
} from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { ArgentinaFlag, UnitedStatesFlag } from "@/components/flags";
import SkillsSection from "@/components/skillsSection";

export default function ResumePage() {
  const flagSelector = (name: string) => {
    if (name === "Spanish") {
      return <ArgentinaFlag size={50} />;
    }
    if (name === "English") {
      return <UnitedStatesFlag size={50} />;
    }

    return <div />;
  };

  return (
    <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-start justify-center">
        <span className={title({ size: "xl" })}>My&nbsp;</span>
        <span className={title({ color: "violet", size: "xl" })}>Resume</span>
        <span className={title({ size: "xl" })}>.</span>
      </div>
      <section className="w-full">
        <div className={subtitle({ class: "mt-8" })}>
          {siteConfig.resume.description}
        </div>
      </section>
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
          {siteConfig.resume.workExperience.map((experience, index) => (
            <AccordionItem
              key={index}
              aria-label={experience.company}
              className="w-full text-large"
              startContent={
                <div className="flex items-center justify-center w-16 h-16 overflow-hidden rounded-md bg-white mr-2">
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
                <span
                  className={subtitleMarked({
                    size: "lg",
                    class: "text-default-700 dark:text-violet-300",
                  })}
                >
                  <Chip
                    className="m-2 dark:text-white"
                    color="secondary"
                    size="md"
                    variant="bordered"
                  >
                    {experience.type}
                  </Chip>
                  {experience.charge}
                </span>
              }
              title={
                <div className="flex justify-between">
                  <div>
                    <span
                      className={subtitle({
                        size: "lg",
                        class: "font-medium text-default-800 inline",
                      })}
                    >
                      {experience.company}
                    </span>
                    <span className={subtitleMarked({ size: "sm" })}>
                      , {experience.location}
                    </span>
                  </div>
                  <Chip
                    className="ml-2"
                    color="default"
                    size="lg"
                    variant="light"
                  >
                    {experience.date}
                  </Chip>
                </div>
              }
            >
              {experience.descriptionItems.map((description, index) => (
                <div key={index} className="py-2 text-medium">
                  {description}
                </div>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section className="w-full">
        <span
          className={subtitle({
            size: "xxl",
            class: "mt-4 text-default-800 font-semibold",
          })}
        >
          Certifications
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-2 py-8">
            {siteConfig.resume.certifications.map((certification, index) => (
              <Card key={index} className="max-w-[500px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="heroui logo"
                    // as={NextImage}
                    className="bg-black object-contain p-1.5"
                    height={64}
                    // priority={index < 2}
                    radius="sm"
                    src={certification.image}
                    width={80}
                    // todo: add fallback image
                  />
                  <div className="flex flex-col">
                    <p className="text-large">{certification.title}</p>
                    <p className="text-medium text-default-500">
                      {certification.company}
                    </p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div className="flex gap-1">
                    <p className="text-default-400 text-small">Instructors:</p>
                    <p className="font-semibold text-default-400 text-small">
                      {certification.instructor}
                    </p>
                  </div>
                  <span className="py-0 text-small text-default-400 pt-2">
                    <span
                      aria-label="calendar-emoji"
                      className="py-2 mr-2"
                      role="img"
                    >
                      🗓️
                    </span>
                    &nbsp;{certification.date}
                  </span>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    className={textLink()}
                    href={certification.link}
                  >
                    Check certificate.
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </span>
      </section>
      <SkillsSection />
      <section className="w-full">
        <span
          className={subtitle({
            size: "xxl",
            class: "mt-4 text-default-800 font-semibold",
          })}
        >
          Languages
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 py-8">
            {siteConfig.resume.languages.map((language, index) => (
              <div key={index} className="flex gap-4 mb-4">
                {flagSelector(language.name)}
                <div className="flex flex-col">
                  <p className="text-large">{language.name}</p>
                  <p className="text-medium text-default-500">
                    {language.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </span>
      </section>
      <section className="w-full">
        <span
          className={subtitle({
            size: "xxl",
            class: "mt-4 text-default-800 font-semibold",
          })}
        >
          Education
          <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 py-8">
            {siteConfig.resume.education.map((education, index) => (
              <Card key={index} className="w-[450px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="heroui logo"
                    // as={NextImage}
                    className="bg-white object-contain p-1.5"
                    height={64}
                    // priority={index < 2}
                    radius="sm"
                    src={education.image}
                    width={80}
                    // todo: add fallback image
                  />
                  <div className="flex flex-col">
                    <p className="text-large">{education.title}</p>
                    <p className="text-medium text-default-500">
                      {education.institution}
                    </p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div className="flex gap-1">
                    <p className="text-default-400 text-small">Location:</p>
                    <p className="font-semibold text-default-400 text-small">
                      {education.description}
                    </p>
                  </div>
                  <span className="py-0 text-small text-default-400 pt-2">
                    <span
                      aria-label="calendar-emoji"
                      className="py-2 mr-2"
                      role="img"
                    >
                      🗓️
                    </span>
                    &nbsp;{education.subtitle}
                  </span>
                </CardBody>
              </Card>
            ))}
          </div>
        </span>
      </section>
    </section>
  );
}
