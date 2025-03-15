import { languageCard, sectionTitle } from "@/components/primitives";
import { ArgentinaFlag, UnitedStatesFlag } from "@/components/LanguagesFlags";

interface Language {
  name: string;
  level: string;
}

const flagMap: Record<string, JSX.Element> = {
  Spanish: <ArgentinaFlag size={50} />,
  English: <UnitedStatesFlag size={50} />,
};

const LanguagesSection = ({ languages }: { languages: Language[] }) => {
  return (
    <section className="w-full">
      <span className={sectionTitle({ size: "sm", class: "mt-4" })}>
        Languages
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {languages.map((language, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg shadow-md md:col-span-2"
          >
            <div className="flex-shrink-0">
              {flagMap[language.name] || <div />}
            </div>
            <div className="flex flex-col">
              <p className={languageCard({ type: "name" })}>{language.name}</p>
              <p className={languageCard({ type: "level" })}>
                {language.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
