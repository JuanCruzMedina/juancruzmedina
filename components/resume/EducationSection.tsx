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
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {education.map((edu, index) => (
          <Card key={index} className="w-full max-w-sm mx-auto">
            <CardHeader className="flex gap-3">
              <Image
                alt={edu.title}
                className="bg-white object-contain p-1.5"
                height={64}
                radius="sm"
                src={edu.image}
                width={80}
              />
              <div className="flex flex-col">
                <p className="text-large font-semibold">{edu.title}</p>
                <p className="text-medium text-default-500">
                  {edu.institution}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex gap-1">
                <p className="text-default-400 text-small">Location:</p>
                <p className="font-semibold text-default-400 text-small">
                  {edu.description}
                </p>
              </div>
              <span className="text-small text-default-400 pt-2 flex items-center">
                <span aria-label="calendar" className="mr-2" role="img">
                  🗓️
                </span>
                {edu.subtitle}
              </span>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
