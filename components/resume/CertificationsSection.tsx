import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import { subtitle, textLink } from "@/components/primitives";

interface Certification {
  title: string;
  company: string;
  instructor: string;
  date: string;
  link: string;
  image: string;
}

const CertificationsSection = ({
  certifications,
}: {
  certifications: Certification[];
}) => {
  return (
    <section className="w-full">
      <span
        className={subtitle({
          size: "xxl",
          class: "mt-4 text-default-800 font-semibold",
        })}
      >
        Certifications
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {certifications.map((certification, index) => (
          <Card key={index} className="w-full max-w-sm mx-auto">
            <CardHeader className="flex gap-3">
              <Image
                alt={certification.title}
                className="bg-black object-contain p-1.5"
                height={64}
                radius="sm"
                src={certification.image}
                width={80}
              />
              <div className="flex flex-col">
                <p className="text-large font-semibold">
                  {certification.title}
                </p>
                <p className="text-medium text-default-500">
                  {certification.company}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex gap-1">
                <p className="text-default-400 text-small">Instructor:</p>
                <p className="font-semibold text-default-400 text-small">
                  {certification.instructor}
                </p>
              </div>
              <span className="text-small text-default-400 pt-2 flex items-center">
                <span aria-label="calendar" className="mr-2" role="img">
                  🗓️
                </span>
                {certification.date}
              </span>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                className={textLink()}
                href={certification.link}
              >
                Check certificate
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
