import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import {
  certificationCard,
  sectionTitle,
  textLink,
} from "@/components/primitives";

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
        className={sectionTitle({
          size: "sm",
          class: "mt-4",
        })}
      >
        Certifications
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {certifications.map((certification, index) => (
          <Card key={index} className="w-full max-w-sm mx-auto">
            <CardHeader className="flex gap-2 lg:gap-3 grid grid-cols-4">
              <Image
                alt={certification.title}
                className="bg-black object-contain p-1.5 col-span-1"
                height={64}
                radius="sm"
                src={certification.image}
                width={80}
              />
              <div className="flex flex-col col-span-3">
                <p className={certificationCard({ type: "title" })}>
                  {certification.title}
                </p>
                <p className={certificationCard({ type: "company" })}>
                  {certification.company}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex gap-1">
                <p className={certificationCard({ type: "description" })}>
                  Instructor:
                </p>
                <p
                  className={certificationCard({
                    type: "description",
                    semibold: true,
                  })}
                >
                  {certification.instructor}
                </p>
              </div>
              <span
                className={certificationCard({
                  type: "description",
                  class: "pt-1 md:pt-2 flex items-center",
                })}
              >
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
                className={textLink({ size: "xs" })}
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
