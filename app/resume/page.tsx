"use client";

import { subtitle, title } from "@/components/primitives";
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
      <WorkExperience workExperience={workExperience} />
      <CertificationsSection certifications={certifications} />
      <SkillsSection skills={skills} />
      <LanguagesSection languages={languages} />
      <EducationSection education={education} />
    </section>
  );
}
