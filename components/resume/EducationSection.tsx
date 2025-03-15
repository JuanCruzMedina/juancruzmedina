import { Card, CardBody, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";

import { educationCard, sectionTitle } from "@/components/primitives";

interface Education {
  title: string;
  institution: string;
  image: string;
  description: string;
  date: string;
}

const EducationSection = ({ education }: { education: Education[] }) => {
  return (
    <section className="w-full">
      <span className={sectionTitle({ size: "sm", class: "mt-4" })}>
        Education
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="w-full mx-auto md:col-span-2 col-start-0"
          >
            <CardHeader className="flex gap-1 md:gap-3">
              <Image
                alt={edu.title}
                className="bg-white object-contain p-1.5"
                height={64}
                radius="sm"
                src={edu.image}
                width={80}
              />
              <div className="flex flex-col">
                <p className={educationCard({ type: "title" })}>{edu.title}</p>
                <p className={educationCard({ type: "subtitle" })}>
                  {edu.institution}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex gap-1">
                <p className={educationCard({ type: "description" })}>
                  Location:
                </p>
                <p
                  className={educationCard({
                    type: "description",
                    class: "font-semibold",
                  })}
                >
                  {edu.description}
                </p>
              </div>
              <span
                className={educationCard({
                  type: "date",
                  class: "pt-1 sm:pt-2 flex items-center",
                })}
              >
                <span aria-label="calendar" className="mr-2" role="img">
                  🗓️
                </span>
                {edu.date}
              </span>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
