import { Button } from "@heroui/button";
import NextLink from "next/link";

import { GithubIcon, LinkedinIcon, ResumeIcon } from "../icons";

import { siteConfig } from "@/config/site";
import {
  buttonGradient,
  name,
  simpleTitleResponsive,
  simpleSubtitleResponsive,
} from "@/components/primitives";

export const Hero = () => {
  return (
    <div className="w-full justify-center">
      <span className={simpleTitleResponsive({ size: "sm", font: "semi" })}>
        Hello there!, I&#39;m&nbsp;-
      </span>
      <br />
      <span>
        <span className={name()}>Juan Cruz Medina.&nbsp;</span>
      </span>
      <br />

      <div className="inline-block text-start justify-center mt-8">
        <div className={simpleSubtitleResponsive()}>
          Software developer.{" "}
          <span
            className={simpleSubtitleResponsive({
              color: "light",
              class: "md:w-1/2 my-2 max-w-full",
            })}
          >
            Passionate about technology and innovation.
          </span>
        </div>
      </div>
      <div className="inline-block text-start justify-center mt-4">
        <div
          className={simpleSubtitleResponsive({
            size: "sm",
            color: "light",
            class: "mt-4",
          })}
        >
          &#x1F3AF; Currently specializing in Frontend (React / Next.js)
        </div>
        <div
          className={simpleSubtitleResponsive({
            size: "sm",
            color: "light",
            class: "mt-1",
          })}
        >
          &#x1F680; Working as a Software Engineer
        </div>
      </div>

      {/* Mobile version - two buttons side by side */}
      <div className="flex sm:hidden flex-row items-start justify-start gap-2 mt-5">
        <Button
          as={NextLink}
          className={buttonGradient()}
          href="/resume"
          radius="sm"
          size="sm"
          startContent={<ResumeIcon className="text-white" size={18} />}
        >
          Resume
        </Button>
        <Button
          as={NextLink}
          className={buttonGradient()}
          href={siteConfig.links.github}
          radius="sm"
          size="sm"
          startContent={<GithubIcon className="text-white" size={18} />}
        >
          Github
        </Button>
        <Button
          as={NextLink}
          className={buttonGradient()}
          href={siteConfig.links.linkedin}
          radius="sm"
          size="sm"
          startContent={<LinkedinIcon className="text-white" size={18} />}
        >
          LinkedIn
        </Button>
      </div>
    </div>
  );
};
