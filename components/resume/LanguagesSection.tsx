import { subtitle } from "@/components/primitives";
import { ArgentinaFlag, UnitedStatesFlag } from "@/components/LanguagesFlags";

interface Language {
  name: string;
  level: string;
}

const LanguagesSection = ({ languages }: { languages: Language[] }) => {
  const flagSelector = (name: string) => {
    if (name === "Spanish") {
      return <ArgentinaFlag size={50} />;
    }
    if (name === "English") {
      return <UnitedStatesFlag size={50} />;
    }

    return <div />;
  };

  return (
    <section className="w-full">
      <span
        className={subtitle({
          size: "xxl",
          class: "mt-4 text-default-800 font-semibold",
        })}
      >
        Languages
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 py-8">
          {languages.map((language, index) => (
            <div key={index} className="flex gap-4 mb-4">
              {flagSelector(language.name)}
              <div className="flex flex-col">
                <p className="text-large">{language.name}</p>
                <p className="text-medium text-default-500">{language.level}</p>
              </div>
            </div>
          ))}
        </div>
      </span>
    </section>
  );
};

export default LanguagesSection;
