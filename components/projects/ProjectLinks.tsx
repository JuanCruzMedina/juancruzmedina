import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import { textLink, textWithColor } from "@/components/primitives";
import { getPrivacyLabel } from "@/utils/projectUtils";

interface ProjectLinksProps {
  link?: string | null;
  sourceLink?: string | null;
  privacy: string;
}

const ProjectLinks = ({ link, sourceLink, privacy }: ProjectLinksProps) => {
  return (
    <div className="flex h-5 items-center space-x-0.1 md:space-x-2">
      <div hidden={!link}>
        <Link
          showAnchorIcon
          className={textLink({ size: "onlyIcon" })}
          href={link || ""}
          size="sm"
        >
          View
        </Link>
      </div>

      {link && sourceLink && (
        <Divider className="ml-1 mr-2" orientation="vertical" />
      )}

      <div hidden={!sourceLink}>
        <Link
          showAnchorIcon
          className={textLink({ size: "onlyIcon" })}
          href={sourceLink || ""}
          size="sm"
        >
          Source
        </Link>
      </div>

      {(link || sourceLink) && privacy !== "open" && (
        <Divider className="ml-1 mr-2" orientation="vertical" />
      )}

      <div hidden={privacy === "open"}>
        <p className={textWithColor({ size: "xs" })}>
          {getPrivacyLabel(privacy)}
        </p>
      </div>
    </div>
  );
};

export default ProjectLinks;
