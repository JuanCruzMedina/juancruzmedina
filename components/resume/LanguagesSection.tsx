import { subtitle } from "@/components/primitives";
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
      <span
        className={subtitle({
          size: "xxl",
          class: "mt-4 text-default-800 font-semibold",
        })}
      >
        Languages
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 max-w-4xl mx-auto">
        {languages.map((language, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg shadow-md"
          >
            <div className="flex-shrink-0">{flagMap[language.name] || <div />}</div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-default-900 dark:text-white">
                {language.name}
              </p>
              <p className="text-sm text-default-500">{language.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
