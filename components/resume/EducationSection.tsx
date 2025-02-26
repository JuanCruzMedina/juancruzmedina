import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";

import { subtitle } from "@/components/primitives";

interface Education {
  title: string;
  institution: string;
  image: string;
  description: string;
  subtitle: string;
}

const EducationSection = ({ education }: { education: Education[] }) => {
  return (
    <section className="w-full">
      <span
        className={subtitle({
          size: "xxl",
          class: "mt-4 text-default-800 font-semibold",
        })}
      >
        Education
        <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 py-8">
          {education.map((education, index) => (
            <Card key={index} className="w-[450px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt="heroui logo"
                  className="bg-white object-contain p-1.5"
                  height={64}
                  radius="sm"
                  src={education.image}
                  width={80}
                  // todo: add fallback image
                />
                <div className="flex flex-col">
                  <p className="text-large">{education.title}</p>
                  <p className="text-medium text-default-500">
                    {education.institution}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex gap-1">
                  <p className="text-default-400 text-small">Location:</p>
                  <p className="font-semibold text-default-400 text-small">
                    {education.description}
                  </p>
                </div>
                <span className="py-0 text-small text-default-400 pt-2">
                  <span
                    aria-label="calendar-emoji"
                    className="py-2 mr-2"
                    role="img"
                  >
                    🗓️
                  </span>
                  &nbsp;{education.subtitle}
                </span>
              </CardBody>
            </Card>
          ))}
        </div>
      </span>
    </section>
  );
};

export default EducationSection;
