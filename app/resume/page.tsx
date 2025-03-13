"use client";

import { simpleTitleResponsive, textParagraph } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import SkillsSection from "@/components/resume/SkillsSection";
import WorkExperience from "@/components/resume/WorkExperience";
import LanguagesSection from "@/components/resume/LanguagesSection";
import EducationSection from "@/components/resume/EducationSection";
import CertificationsSection from "@/components/resume/CertificationsSection";

export default function ResumePage() {
  const { workExperience, skills, education, certifications, languages } =
    siteConfig.resume;

  return (
    <section className="flex flex-col items-start justify-center gap-4 md:py-10">
      <div className="inline-block max-w-lg text-start justify-center">
        <span className={simpleTitleResponsive({ size: "md" })}>My&nbsp;</span>
        <span className={simpleTitleResponsive({ color: "gradientViolet", size: "md" })}>Resume</span>
        <span className={simpleTitleResponsive({ size: "md" })}>.</span>
      </div>
      <section className="w-full">
        <div className={textParagraph({size:"lg", class: "sm:mt-8" })}>
          {siteConfig.resume.description}
        </div>
      </section>
      <WorkExperience workExperience={workExperience} />
      <CertificationsSection certifications={certifications} />
      <LanguagesSection languages={languages} />
      <EducationSection education={education} />
      <SkillsSection skills={skills} />
    </section>
  );
}
