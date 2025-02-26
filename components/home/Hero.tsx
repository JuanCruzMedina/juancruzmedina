import { name, subtitle, subtitleMarked, title } from "@/components/primitives";

export const Hero = () => {
  return (
    <div className="block w-full justify-center">
      <span className={title({ size: "sm" })}>
        Hello there!, I&#39;m&nbsp;-
      </span>
      <br />
      <span className={name({ color: "violet", size: "auto" })}>
        Juan Cruz Medina.&nbsp;
      </span>
      <br />
      <div className="inline-block text-start justify-center mt-8">
        <div className={title({ size: "xxs" })}>
          Software developer.{" "}
          <span className="md:w-1/2 my-2 text-gray-500 dark:text-gray-400 max-w-full">
            Passionate about technology and innovation.
          </span>
        </div>
      </div>
      <div className="inline-block text-start justify-center mt-8">
        <div className={subtitle({ class: "mt-4" })}>
          &#x1F3AF; Currently specializing in Frontend (React / Next.js)
        </div>
        <div className={subtitle({ class: "mt-1" })}>
          &#x1F680; Working as a&nbsp;
          <div className={subtitleMarked({ color: "violet" })}>
            Software Engineer
          </div>
        </div>
      </div>
    </div>
  );
};
