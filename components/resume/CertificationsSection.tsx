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
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-2 py-8">
          {certifications.map((certification, index) => (
            <Card key={index} className="max-w-[500px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt="heroui logo"
                  // as={NextImage}
                  className="bg-black object-contain p-1.5"
                  height={64}
                  // priority={index < 2}
                  radius="sm"
                  src={certification.image}
                  width={80}
                  // todo: add fallback image
                />
                <div className="flex flex-col">
                  <p className="text-large">{certification.title}</p>
                  <p className="text-medium text-default-500">
                    {certification.company}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex gap-1">
                  <p className="text-default-400 text-small">Instructors:</p>
                  <p className="font-semibold text-default-400 text-small">
                    {certification.instructor}
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
                  &nbsp;{certification.date}
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
                  Check certificate.
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </span>
    </section>
  );
};

export default CertificationsSection;
