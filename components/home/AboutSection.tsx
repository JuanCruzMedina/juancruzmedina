import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { textLink, title } from "../primitives";

import { siteConfig } from "@/config/site";

export const AboutSection = () => {
  return (
    <>
      <span className={title({ size: "md" })}>About me &#x1F4AC;</span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-8 overflow-visible">
        <div className="col-span-1 flex relative overflow-visible">
          <div className="flex flex-col w-[350px] h-[350px] justify-center items-center overflow-visible relative">
            <div className="overflow-visible relative">
              <Image
                alt="Juan Cruz Photo"
                className="
          transition-transform duration-300 ease-in-out
          hover:scale-110
          object-contain
          relative
        "
                height={340}
                src="foto-con-indio.png"
                width={340}
              />
            </div>
          </div>
        </div>

        <div className="col-span-2 text-default-800">
          <p className="break-normal">
            Hey! I&#39;m Juan Cruz, an Argentinian software developer with 5
            years of experience in the industry. I&#39;m currently in the final
            stage of my{" "}
            <span className="font-semibold inline">
              Information Systems Engineering
            </span>{" "}
            degree at{" "}
            <Link
              isExternal
              className={textLink({ class: "inline" })}
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
            <span className="font-semibold">
              💡 Meet Indio, my debugging partner!
            </span>
            <br />
            Some programmers have a rubber duck to explain their code problems
            to—I have my cat, Indio. Whether he&#39;s sitting on my shoulders or
            staring at me with judgmental eyes, he&#39;s always there to listen
            to my bugs (even if he doesn’t care about them). 😼
          </p>
        </div>
      </div>
    </>
  );
};
