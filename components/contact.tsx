import { Link } from "@heroui/link";

import { subtitle, subtitleLink, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export const Contact = () => {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <span className={title({ size: "md" })}>Let’s&nbsp;</span>
      <span className={title({ color: "violet", size: "md" })}>Connect</span>
      <span className={title({ size: "md" })}>!</span>
      <br />
      <div className="inline-block text-center justify-center py-8">
        <div className={subtitle()}>
          <span className="md:w-1/2 my-2 text-default-600 max-w-full mt-4">
            Got a project in mind or a job opportunity? 🚀 Feel free to send me
            a direct message on my{"  "}
            <Link
              isExternal
              className={subtitleLink({ color: "violet" })}
              href={siteConfig.links.linkedin}
              underline="hover"
            >
              Linkedin profile
            </Link>
            , and I’ll get back to you as soon as I can! Looking forward to
            chatting! 😊💼
          </span>
        </div>
      </div>
    </div>
  );
};
