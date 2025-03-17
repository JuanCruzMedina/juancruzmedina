import { sectionTitle, textParagraph } from "../primitives";

import { ProfileImage } from "./ProfileImage";

export const AboutSection = () => {
  return (
    <>
      <span className={sectionTitle()}>About me</span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4 overflow-visible">
        <div className={textParagraph({ class: "col-span-2 text-left" })}>
          <p className="break-normal">
            Hi! I&#39;m <span className="font-semibold">Juan Cruz</span>, a{" "}
            <span
              className={textParagraph({ color: "violetDark", font: "bold" })}
            >
              software developer
            </span>{" "}
            passionate about <span className="font-bold">technology</span> and{" "}
            <span className="font-bold">innovation</span>. With a strong
            foundation in{" "}
            <span
              className={textParagraph({ color: "violetDark", font: "bold" })}
            >
              backend development
            </span>
            , I specialize in building{" "}
            <span className="font-semibold">scalable</span> and{" "}
            <span className="font-semibold">high-quality</span> applications
            using{" "}
            <span
              className={textParagraph({ color: "violetDark", font: "bold" })}
            >
              .NET
            </span>{" "}
            and{" "}
            <span
              className={textParagraph({ color: "violetDark", font: "bold" })}
            >
              Python
            </span>
            .
          </p>
          <br />
          <p>
            Over the years, I’ve worked on a wide range of projects, from{" "}
            <span
              className={textParagraph({ color: "violetDark", font: "bold" })}
            >
              optimizing legacy systems
            </span>{" "}
            to designing{" "}
            <span className="font-semibold">
              maintainable software solutions
            </span>
            . My expertise lies in applying{" "}
            <span className="font-semibold">best practices</span>,{" "}
            <span className="font-semibold">refactoring techniques</span>, and{" "}
            <span
              className={textParagraph({ color: "violetDark", font: "bold" })}
            >
              software architecture principles
            </span>{" "}
            to enhance{" "}
            <span
              className={textParagraph({ color: "violetDark", font: "bold" })}
            >
              application performance
            </span>{" "}
            and <span className="font-semibold">team productivity</span>.
          </p>
          <br />
          <p>
            <span
              className={textParagraph({ color: "violetDark", font: "bold" })}
            >
              💡 Meet Indio, my debugging partner!
            </span>
            <br />
            Some programmers have a rubber duck to explain their code problems
            to—I have my cat,{" "}
            <span
              className={textParagraph({ color: "violetDark", font: "bold" })}
            >
              Indio
            </span>
            . Whether he&#39;s sitting on my shoulders or staring at me with
            judgmental eyes, he&#39;s always there to listen to my{" "}
            <span
              className={textParagraph({ color: "violetDark", font: "bold" })}
            >
              bugs
            </span>
            . 😼
          </p>
        </div>

        <ProfileImage />
      </div>
    </>
  );
};
