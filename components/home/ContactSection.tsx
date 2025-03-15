"use client";

import NextLink from "next/link";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

import { MailIcon } from "../icons";

import {
  buttonGradient,
  sectionTitle,
  textLink,
  textParagraph,
} from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { useButtonSize } from "@/hooks/useButtonSize";

export const ContactSection = () => {
  const buttonSize = useButtonSize();

  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <span className={sectionTitle({ size: "md" })}>Let’s&nbsp;</span>
      <span className={sectionTitle({ color: "violet", size: "md" })}>
        Connect
      </span>
      <span className={sectionTitle({ size: "md" })}>!</span>
      <br />
      <div className="inline-block text-center justify-center py-8">
        <div className={textParagraph()}>
          <span className="md:w-1/2 my-2 text-default-600 max-w-full mt-4">
            Got a project in mind or a job opportunity? 🚀 Feel free to send me
            a direct message on my{"  "}
            <Link
              isExternal
              className={textLink()}
              href={siteConfig.links.linkedin}
              underline="hover"
            >
              Linkedin profile
            </Link>
            , and I’ll get back to you as soon as I can! Looking forward to
            chatting! 😊💼
          </span>
        </div>
        <Button
          as={NextLink}
          className={buttonGradient({ class: "mt-4 md:mt-8" })}
          href={siteConfig.sendEmail}
          radius="sm"
          size={buttonSize}
          startContent={<MailIcon />}
        >
          Send me an email
        </Button>
      </div>
    </div>
  );
};
