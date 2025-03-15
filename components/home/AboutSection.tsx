import { Link } from "@heroui/link";

import { sectionTitle, textParagraph } from "../primitives";

import { ProfileImage } from "./ProfileImage";

import { siteConfig } from "@/config/site";

export const AboutSection = () => {
  return (
    <>
      <span className={sectionTitle()}>About me &#x1F4AC;</span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 overflow-visible">
        <div className={textParagraph({ class: "col-span-2 text-left" })}>
          <p className="break-normal">
            Hey! I&#39;m Juan Cruz, an Argentinian software developer with 5
            years of experience in the industry. I&#39;m currently in the final
            stage of my{" "}
            <span className={textParagraph({ font: "bold" })}>
              Information Systems Engineering
            </span>{" "}
            degree at{" "}
            <Link
              isExternal
              className={textParagraph({ isLink: true })}
              href={siteConfig.links.university}
              underline="hover"
            >
              Universidad Tecnológica Nacional - Facultad Regional Córdoba
            </Link>
            .
          </p>
          <br />
          <p>
            Ever since I started programming, I haven&#39;t stopped learning new
            languages, techniques and technologies. I&#39;ve had the opportunity
            to work in SaaS companies, freelance projects and some larger-scale
            projects. I enjoy writing code for people, learning and sharing
            knowledge. My current focus is on leading and supporting projects as
            a coach.
          </p>
          <br />
          <p>
            <span className={textParagraph({ font: "bold" })}>
              💡 Meet Indio, my debugging partner!
            </span>
            <br />
            Some programmers have a rubber duck to explain their code problems
            to—I have my cat, Indio. Whether he&#39;s sitting on my shoulders or
            staring at me with judgmental eyes, he&#39;s always there to listen
            to my bugs (even if he doesn&apos;t care about them). 😼
          </p>
        </div>

        <ProfileImage />
      </div>
    </>
  );
};
